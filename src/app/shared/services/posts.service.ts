import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FbCreateResponse, Post} from '../interfaces';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) {
  }

  create(post: Post): Observable<Post> {
    return this.http.post(`${environment.apiURLS.db}/posts.json`, post)
      .pipe(
        map((response: FbCreateResponse) => {
          const createdPost: Post = {
            ...post,
            id: response.name,
            date: new Date(post.date)
          };

          return createdPost;
        })
      );
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiURLS.db}/posts.json`).pipe(
      map((response: { [key: string]: any }) => {
        return Object.keys(response).map(key => ({
          ...response[key],
          id: key,
          date: new Date(response[key].date)
        }));
      })
    );
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiURLS.db}/posts/${id}.json`);
  }

  getById(id: string): Observable<Post> {
    return this.http.get<Post>(`${environment.apiURLS.db}/posts/${id}.json`)
      .pipe(
        map((post: Post) => {
          return {
            ...post,
            id,
            date: new Date(post.date)
          };
        })
      );
  }

  update(post: Post): Observable<Post> {
    return this.http.patch<Post>(`${environment.apiURLS.db}/posts/${post.id}.json`, post);
  }
}
