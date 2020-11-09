import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';

import { AddPostService } from 'src/app/services/add-post.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})


export class AddPostComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;
  public post: Post;

  constructor(private addPostService: AddPostService, private router: Router, private commonService: CommonService ) { 
    this.post = new Post();    
  }
    

    ngOnInit(): void {
      this.commonService.postEdit_Observable.subscribe(res => {
        this.post = this.commonService.post_to_be_edited;
        console.log('post is ', this.post._id);
      });
    }
  
    addPost() {
      if(this.post.title && this.post.description){
        if(this.post._id){
          this.addPostService.updatePost(this.post).subscribe(res =>{
            this.closeBtn.nativeElement.click();
            this.commonService.notifyPostAddition();
          });
        } else {
          this.addPostService.addPost(this.post).subscribe(res =>{
            this.closeBtn.nativeElement.click();
            this.commonService.notifyPostAddition();
          });
        }
      } else {
        alert('Title and Description required');
      }
    }

}
