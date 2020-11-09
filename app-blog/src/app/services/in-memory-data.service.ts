import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const posts = [ { title : 'TutsPlus Python Entry',
    description : 'Welcome to official entry of TutsPlus Python programming session'
  }];
    return {posts};
  }

   // Overrides the genId method to ensure that a post always has an id.
  // If the posts array is empty,
  // the method below returns the initial number (10).
  // if the posts array is not empty, the method below returns the highest
  // hero id + 1.
  genId(posts: Post[]): number {
    return posts.length > 0 ? Math.max(...posts.map(post => post._id)) + 1 : 10;
  }
}
