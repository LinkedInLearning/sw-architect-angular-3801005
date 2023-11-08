import { Component, Input } from '@angular/core';
import { Book, bookNa } from '../models';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'ws-book-card',
    templateUrl: './book-card.component.html',
    standalone: true,
    imports: [ MatCardModule, NgOptimizedImage, MatButtonModule, RouterLink ],
    styleUrls: [ './book-card.component.scss' ],
})
export class BookCardComponent {
    @Input() content: Book = bookNa();
}
