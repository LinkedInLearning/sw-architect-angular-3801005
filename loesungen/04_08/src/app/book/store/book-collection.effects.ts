import { Injectable } from '@angular/core';

import { exhaustMap, map } from 'rxjs/operators';
import {
    createBookComplete,
    createBookStart,
    deleteBookComplete,
    deleteBookStart,
    loadBooksComplete,
    loadBooksStart
} from './book-collection.actions';
import { BookApiService } from '../book-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class BookCollectionEffects {
    load = createEffect(() =>
        this.actions$.pipe(
            ofType(loadBooksStart),
            exhaustMap(() => this.bookApi.getAll()),
            map(books => loadBooksComplete({ books }))
        )
    );

    create = createEffect(() =>
        this.actions$.pipe(
            ofType(createBookStart),
            exhaustMap(({ book }) => this.bookApi.create(book)),
            map(bookCreated => createBookComplete({ book: bookCreated }))
        )
    );

    delete = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteBookStart),
            exhaustMap(({ bookIsbn }) => this.bookApi.delete(bookIsbn).pipe(map(() =>
                deleteBookComplete({ bookIsbn }))))
        )
    );

    constructor(private actions$: Actions, private bookApi: BookApiService) {
    }
}
