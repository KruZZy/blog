import {Component, OnInit} from '@angular/core';
import {ConsumeApiService} from "../../consume-api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {

  constructor(private service: ConsumeApiService, private route: ActivatedRoute) { }

  postData: any = null;
  id: number = 0;

  ngOnInit(): void {
    let tempID = this.route.snapshot.paramMap.get('id') || 0;
    console.log(tempID);
    if (typeof tempID === "string") this.id = parseInt(tempID, 10);
    this.fetchPostData(this.id);
  }

  fetchPostData(id: number) {
    this.service.getPost(id).subscribe(post => {
      this.postData = post;
    });
  }

}
