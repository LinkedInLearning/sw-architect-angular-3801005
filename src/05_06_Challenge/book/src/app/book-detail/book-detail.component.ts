import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { exhaustMap, switchMap, tap } from 'rxjs/operators';

import { Book } from '../models';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { BookApiService } from "../book-api.service";

@Component({
    selector: 'ws-book-detail',
    standalone: true,
    styleUrls: [ './book-detail.component.scss' ],
    imports: [ MatCardModule, NgOptimizedImage, MatButtonModule, AsyncPipe, NgIf ],
    templateUrl: 'book-detail.component.html',
})
export class BookDetailComponent {
    public book$: Observable<Book>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private bookService: BookApiService
    ) {
        this.book$ = this.route.params.pipe(
            switchMap((params) => this.bookService.getByIsbn(params['isbn']))
        );
    }

    remove() {
        this.route.params
            .pipe(
                exhaustMap((params) => this.bookService.delete(params['isbn'])),
                tap(() => this.router.navigateByUrl('/'))
            )
            .subscribe();
    }
}
