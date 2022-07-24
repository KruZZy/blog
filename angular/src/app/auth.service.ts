import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {shareReplay, tap} from "rxjs";

import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly apiUrl = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(this.apiUrl + '/user/login',
      {username, password})
      .pipe(
        tap(res => this.setSession(res)),
        shareReplay()
      )
  }

  private setSession(res: any) {
    const expiresAt = moment().add(3600 * 24, 'second');

    localStorage.setItem('token_access', res.access);
    localStorage.setItem('token_refresh', res.refresh);
    localStorage.setItem('token_expiration', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('token_access');
    localStorage.removeItem('token_refresh');
    localStorage.removeItem('token_expiration');
  }

  public isLoggedIn() {
    console.log("token expiration: " + this.getExpiration());
    return moment().isBefore(this.getExpiration());
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }

  public getExpiration() {
    return moment(JSON.parse(localStorage.getItem("token_expiration") || "0"));
  }
}
