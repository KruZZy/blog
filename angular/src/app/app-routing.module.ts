import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

/** components go here **/
import {PostComponent} from "./post/post.component";
import {ViewComponent} from "./post/view/view.component";

const routes: Routes = [
  { path: 'posts/all', component: PostComponent },
  { path: 'posts/view/:id', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
