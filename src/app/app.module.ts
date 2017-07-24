import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { VideoPostComponent } from "app/admin/video-post/video-post.component";
import { PageNotFoundComponent } from "app/page-not-found.component";
import { TimelineComponent } from './timeline/timeline.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminModule } from "app/admin/admin.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TimelineComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    AdminModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
