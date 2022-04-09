/** modules go here **/
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
/** components go here **/
import {AppComponent} from './app.component';
import {PostComponent} from './post/post.component';
import {ViewComponent} from './post/view/view.component';

/** services go here **/
import {ConsumeApiService} from "./consume-api.service";


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ConsumeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
