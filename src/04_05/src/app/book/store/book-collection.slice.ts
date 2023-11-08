import { Book } from '../models';

export interface BookCollectionSlice {
    entities: ReadonlyArray<Book>;
}
