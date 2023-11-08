import { Route } from '@angular/router';
import { BookComponent } from "../book.component";
import { BookListComponent } from "../book-list/book-list.component";
import { BookDetailComponent } from "../book-detail/book-detail.component";
import { BookApiService } from "../book-api.service";
import { provideHttpClient } from "@angular/common/http";


export const remoteRoutes: Route[] = [
    {
        path: '',
        component: BookComponent,
        providers: [
            provideHttpClient(),
            BookApiService
        ],
        children: [
            {
                path: '',
                component: BookListComponent,
            },
            {
                path: ':isbn',
                component: BookDetailComponent,
            },
        ],
    },
];
