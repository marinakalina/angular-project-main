import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../shared/interfaces';
import {PostsService} from '../../shared/services/posts.service';
import {AlertService} from '../shared/services/alert.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  form: FormGroup;

  constructor(
    private postsService: PostsService,
    private alertService: AlertService
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required]),
      text: new FormControl(null, [Validators.required]),
    });
  }

  isControlNeedMistake(controlName: string): boolean {
    return this.form.get(controlName).touched && this.form.get(controlName).invalid;
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const post: Post = {
      title: this.form.value.title,
      author: this.form.value.title,
      date: new Date(),
      text: this.form.value.text
    };

    this.postsService.create(post).subscribe(() => {
      this.form.reset();
      this.alertService.success('Post was created');
    });
  }
}
