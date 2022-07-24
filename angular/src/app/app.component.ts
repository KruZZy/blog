import {Component} from '@angular/core';
import {NavRoute} from "./interfaces/nav-route";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`.router-link-active { background-color: red; }`]
})
export class AppComponent {
  title = 'angular';

  routes: NavRoute[] = [
    { path: '/', name: 'Home', icon: "fa-solid fa-home", accessLevel: 0 },
    { path: '/login', name: 'Login', icon: "fa-solid fa-user" ,accessLevel: 0}
  ]

  constructor(public authService: AuthService) { }
}
