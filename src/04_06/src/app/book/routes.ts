import { Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { provideState } from '@ngrx/store';
import { bookCollectionReducer } from './store/book-collection.reducer';

export const BOOK_ROUTES: Routes = [
    {
        path: '',
        component: BookComponent,
        providers: [
            [ provideState('books', bookCollectionReducer) ],
        ],
        children: [
            {
                path: '',
                component: BookListComponent
            },
            {
                path: 'new',
                loadComponent: () => import('./book-new/book-new.component').then(m => m.BookNewComponent),
            },
            {
                path: ':isbn',
                component: BookDetailComponent
            }
        ]
    }
];
