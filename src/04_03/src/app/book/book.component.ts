import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'ws-book',
    standalone: true,
    imports: [
        RouterOutlet
    ],
    templateUrl: './book.component.html'
})
export class BookComponent {
}
