import { Routes } from "@angular/router";
import { BookComponent } from "./book.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";

export const BOOK_ROUTES: Routes = [
    {
        path: "",
        component: BookComponent,
        children: [
            {
                path: "",
                component: BookListComponent,
            },
            {
                path: "new",
                loadComponent: () =>
                    import("./book-new/book-new.component").then(
                        (m) => m.BookNewComponent
                    ),
            },
            {
                path: ":isbn",
                component: BookDetailComponent,
            },
        ],
    },
];
