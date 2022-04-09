import {Component, OnInit} from '@angular/core';
import {ConsumeApiService} from "../consume-api.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private service: ConsumeApiService) { }

  postList: any[] = [];
  ngOnInit(): void {
    this.refreshPostList();
  }

  refreshPostList() {
    this.service.getPostList().subscribe(posts => {
      console.log(posts);
      this.postList = posts.results;
    });
  }
}
