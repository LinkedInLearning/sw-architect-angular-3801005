import { createReducer, on } from '@ngrx/store';
import { createBookStart, loadBooksComplete } from './book-collection.actions';
import { BookCollectionSlice } from './book-collection.slice';

const initial: BookCollectionSlice = {
    entities: []
};

export const bookCollectionReducer = createReducer(
    initial,
    on(createBookStart, (slice, { book }) => ({ ...slice, entities: [ ...slice.entities, book ] })),
    on(loadBooksComplete, (slice, { books }) => ({ ...slice, entities: books }))
);
