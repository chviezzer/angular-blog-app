import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private http: HttpClient) { }

  addPost(post: Post){
    return this.http.post('/api/post/createPost',{
        title : post.title,
        description : post.description,
        date: post.date,
        tag: post.tag
    })
  }

  updatePost(post: Post){
    return this.http.post('/api/post/updatePost',{
      id: post._id,
      title : post.title,
      description : post.description,
      date: post.date,
      tag: post.tag
    })
  }
}

