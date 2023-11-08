import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { bookNa } from '../models';
import { BookApiService } from "../book-api.service";
import { take } from "rxjs";
import { Router, RouterLink } from "@angular/router";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { NgIf } from "@angular/common";
import { createBookStart } from '../store/book-collection.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'ws-book-new',
    styleUrls: ['./book-new.component.scss'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        RouterLink,
        NgIf
    ],
    templateUrl: './book-new.component.html'
})
export class BookNewComponent {
    form: FormGroup;

    constructor(private fb: FormBuilder, private bookApi: BookApiService, private router: Router,
        private store: Store) {
        this.form = this.buildForm();
    }

    create() {
        const book = { ...bookNa(), ...this.form.value };

        // this.bookApi.create(book).pipe(take(1)).subscribe(() => this.router.navigate(['/books']));

        this.store.dispatch(createBookStart({ book }));
    }

    private buildForm(): FormGroup {
        return this.fb.group({
            isbn: ['', [Validators.required, Validators.minLength(3)]],
            title: ['', Validators.required],
            author: ['', Validators.required],
            cover: ['']
        });
    }
}
