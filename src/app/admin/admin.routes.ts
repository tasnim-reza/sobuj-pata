import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from "app/page-not-found.component";
import { AppComponent } from "app/app.component";
import { VideoPostComponent } from "app/admin/video-post/video-post.component";
import { TimelineComponent } from "app/timeline/timeline.component";
import { AdminNavbarComponent } from "app/admin/admin-navbar/admin-navbar.component";

export const adminRoutes: Routes = [
    {
        path: 'admin',
        children: [
            { path: '', component: VideoPostComponent },
            { path: '', component: AdminNavbarComponent, outlet: 'navbar' },
            // { path: '', component: FooterComponent, outlet: 'footer' }
        ],
    }
];