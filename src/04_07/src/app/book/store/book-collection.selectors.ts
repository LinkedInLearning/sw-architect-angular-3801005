import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookCollectionSlice } from './book-collection.slice';

const bookFeature = createFeatureSelector<BookCollectionSlice>('books');

export const bookCollection = createSelector(bookFeature, slice => slice.entities);
