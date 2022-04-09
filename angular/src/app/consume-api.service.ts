import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {first, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ConsumeApiService {
  readonly apiUrl = "http://127.0.0.1:8000/api";
  readonly postsUrl = this.apiUrl + "/posts";

  constructor(private http: HttpClient) { }

  getPostList(): Observable<{results: any[]}> {
    return this.http.get<{results: any[]}>(this.postsUrl).pipe(first());
  }

  addPost(post : any) {
    return this.http.post(this.postsUrl, post);
  }

  getPost(id: number) {
    return this.http.get<any>(this.postsUrl + "/" + id)
  }

}
