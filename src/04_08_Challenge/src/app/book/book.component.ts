import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { loadBooksStart } from './store/book-collection.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'ws-book',
    standalone: true,
    imports: [
        RouterOutlet
    ],
    templateUrl: './book.component.html'
})
export class BookComponent {
    constructor(private store: Store) {
        this.store.dispatch(loadBooksStart());
    }
}
