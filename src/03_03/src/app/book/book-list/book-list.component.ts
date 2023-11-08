import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { BookApiService } from "../book-api.service";
import { Book } from "../models";
import { BookCardComponent } from "../book-card/book-card.component";
import { AsyncPipe, NgForOf } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "ws-book-list",
  styleUrls: ["./book-list.component.scss"],
  standalone: true,
  imports: [BookCardComponent, NgForOf, AsyncPipe],
  templateUrl: "book-list.component.html",
})
export class BookListComponent {
  books$: Observable<Book[]>;

  constructor(private bookData: BookApiService, private router: Router) {
    this.books$ = this.bookData.getAll();
  }

  handleDetailClick(book: Book) {
    this.router.navigate(["/books", book.isbn]);
  }
}
