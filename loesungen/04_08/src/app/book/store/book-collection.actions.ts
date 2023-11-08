import { createAction, props } from '@ngrx/store';
import { Book } from '../models';

export const createBookStart = createAction('[Book] Create Book Started', props<{ book: Book }>());
export const createBookComplete = createAction('[Book] Create Book Completed', props<{ book: Book }>());
export const loadBooksStart = createAction('[Book] Load Books Started');
export const loadBooksComplete = createAction('[Book] Load Books Completed', props<{ books: Book[] }>());
export const deleteBookStart = createAction('[Book] Delete Book Started', props<{ bookIsbn: string }>());
export const deleteBookComplete = createAction('[Book] Delete Book Completed', props<{ bookIsbn: string }>());