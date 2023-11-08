import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { BookComponent } from "./app/book.component";

bootstrapApplication(BookComponent, appConfig).catch((err) =>
    console.error(err)
);
