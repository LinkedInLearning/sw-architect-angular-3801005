import { createReducer, on } from '@ngrx/store';
import { createBookStart } from './book-collection.actions';
import { BookCollectionSlice } from './book-collection.slice';

const initial: BookCollectionSlice = {
    entities: []
};

export const bookCollectionReducer = createReducer(
    initial,
    on(createBookStart, (slice, { book }) => ({ ...slice, entities: [ ...slice.entities, book ] }))
);
