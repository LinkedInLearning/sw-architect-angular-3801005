import { createReducer, on } from '@ngrx/store';
import { createBookComplete, deleteBookComplete, loadBooksComplete } from './book-collection.actions';
import { BookCollectionSlice } from './book-collection.slice';

const initial: BookCollectionSlice = {
    entities: []
};

export const bookCollectionReducer = createReducer(
    initial,
    on(createBookComplete, (slice, { book }) => ({
        ...slice,
        entities: [ ...slice.entities, book ]
    })),
    on(loadBooksComplete, (slice, { books }) => ({ ...slice, entities: books })),
    on(deleteBookComplete, (slice, { bookIsbn }) => ({
        ...slice,
        entities: slice.entities.filter(book => book.isbn !== bookIsbn)
    })),
);
