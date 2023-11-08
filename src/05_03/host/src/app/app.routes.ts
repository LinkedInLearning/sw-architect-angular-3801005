import { Route } from '@angular/router';
import { AboutComponent } from "./about/about.component";

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    {
        path: 'books',
        loadChildren: () => import('book/Routes').then((m) => m.remoteRoutes),
    },
    {
        path: 'about',
        component: AboutComponent,
    },
];
