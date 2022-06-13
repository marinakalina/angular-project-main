import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../../shared/services/posts.service';
import {switchMap} from 'rxjs/operators';
import {Alert, Post} from '../../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AlertService} from '../shared/services/alert.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  post: Post;
  submitting = false;

  uSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private alertService: AlertService
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.postsService.getById(params.id);
    }))
      .subscribe((post: Post) => {
        this.post = post;
        this.form = new FormGroup({
          title: new FormControl(post.title, [Validators.required]),
          text: new FormControl(post.text, [Validators.required]),
        });
      });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.submitting = true;

    this.uSub = this.postsService.update({
      ...this.post,
      text: this.form.value.text,
      title: this.form.value.title
    }).subscribe(() => {
      this.submitting = false;
      this.alertService.success('Post was updated');
    });
  }

  isControlNeedMistake(controlName: string): boolean {
    return this.form.get(controlName).touched && this.form.get(controlName).invalid;
  }

  ngOnDestroy(): void {
    if (this.uSub) {
      this.uSub.unsubscribe();
    }
  }
}
