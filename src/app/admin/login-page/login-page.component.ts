import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/interfaces';
import {AuthService} from '../shared/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  submitting = false;
  message = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (authService.isAuthenticated()) {
      router.navigate(['/admin', 'dashboard']);
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params.loginAgain) {
        this.message = 'Login Please';
      }
    });

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.submitting = true;

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.authService.login(user).subscribe(() => {
      this.form.reset();
      this.submitting = false;
      this.router.navigate(['/admin', 'dashboard']);
    }, () => {
      this.submitting = false;
    });
  }

  submitSignUp(): void {
    if (this.form.invalid) {
      return;
    }

    this.submitting = true;

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.authService.signUp(user).subscribe(() => {
      this.form.reset();
      this.submitting = false;
      this.router.navigate(['/admin', 'dashboard']);
    }, () => {
      this.submitting = false;
    });
  }

  isControlNeedMistake(controlName: string): boolean {
    return this.form.get(controlName).touched && this.form.get(controlName).invalid;
  }
}
