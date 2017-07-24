import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { VideoPostComponent } from "app/admin/video-post/video-post.component";
import { RouterModule } from "@angular/router";
import { adminRoutes } from "app/admin/admin.routes";
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';


@NgModule({
    declarations: [
        VideoPostComponent,
        AdminNavbarComponent
    ],
    imports: [
        RouterModule.forRoot(
            adminRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ),
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [VideoPostComponent]
})
export class AdminModule { }
