import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

/** components go here **/
import {PostComponent} from "./post/post.component";

const routes: Routes = [
  {path: 'posts/all', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
