import {Pipe, PipeTransform} from '@angular/core';
import {Post} from '../../shared/interfaces';

@Pipe({
  name: 'searchPosts'
})
export class SearchPipe implements PipeTransform {
  transform(posts: Post[], search = ''): Post[] {
    search = search.trim().toLowerCase();

    if (!search) {
      return posts;
    }

    return posts.filter(post => {
      return post.title.toLowerCase().includes(search);
    });
  }

}
