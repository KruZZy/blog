import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

/** components go here **/
import {PostComponent} from "./post/post.component";
import {ViewComponent} from "./post/view/view.component";
import {LoginComponent} from "./user/login/login.component";

const routes: Routes = [
  { path: 'posts/all', component: PostComponent },
  { path: 'posts/view/:id', component: ViewComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
