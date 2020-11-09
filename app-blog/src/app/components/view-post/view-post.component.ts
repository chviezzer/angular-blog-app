import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

import { CommonService } from 'src/app/services/common.service';
import { ViewPostService } from 'src/app/services/view-post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

 posts:  any [] = [];

  constructor(private viewPostService: ViewPostService, private commonService: CommonService) { }

 

  ngOnInit(): void {
    
    this.getAllPost();

    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    });

  }

  getAllPost(): void {
    this.viewPostService.getAllPost()
    .subscribe((data: any) => {
      this.posts = data.results;
    })
    // .subscribe(result => this.posts = result['']);
  }
 
  editPost(post: Post){
    this.commonService.setPostToEdit(post);
    console.log('post is ',post);
  }
}
