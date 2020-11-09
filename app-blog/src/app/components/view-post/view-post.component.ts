import { Component, OnInit } from '@angular/core';

import { CommonService } from 'src/app/services/common.service';
import { ViewPostService } from 'src/app/services/view-post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  public posts: any [];

  constructor(private viewPostService: ViewPostService, private commonService: CommonService) { }

 

  ngOnInit(): void {
    this.getAllPost();

    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    });

  }

  getAllPost() {
    this.viewPostService.getAllPost().subscribe(result => {
      this.posts = result['data'];
    });
  }
}
