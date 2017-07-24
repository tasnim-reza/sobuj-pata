import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from "app/page-not-found.component";
import { AppComponent } from "app/app.component";
import { VideoPostComponent } from "app/admin/video-post/video-post.component";
import { TimelineComponent } from "app/timeline/timeline.component";
import { NavbarComponent } from "app/navbar/navbar.component";
import { FooterComponent } from "app/footer/footer.component";

export const appRoutes: Routes = [
    {
        path: 'admin',
        component: VideoPostComponent
    },
    {
        path: 'timeline',
        children: [
            { path: '', component: TimelineComponent },
            { path: '', component: NavbarComponent, outlet: 'navbar' },
            { path: '', component: FooterComponent, outlet: 'footer' }
        ],
        data: { title: 'Heroes List' }
    },
    {
        path: '',
        redirectTo: '/timeline',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];