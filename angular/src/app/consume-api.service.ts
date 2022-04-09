import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {first, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ConsumeApiService {
  readonly apiUrl = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

  getPostList(): Observable<{results: any[]}> {
    return this.http.get<{results: any[]}>(this.apiUrl + "/posts/").pipe(first());
  }

  addPost(post : any) {
    return this.http.post(this.apiUrl + "/posts/", post);
  }

  getPost(id: number) {
    return this.http.get<any>(this.apiUrl + "/" + id)
  }

}
