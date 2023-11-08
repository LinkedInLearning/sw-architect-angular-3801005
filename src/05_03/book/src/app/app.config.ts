import { ApplicationConfig } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, } from '@angular/router';
import { provideHttpClient } from "@angular/common/http";
import { remoteRoutes } from "./remote-entry/entry.routes";
import { BookApiService } from "./book-api.service";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(remoteRoutes, withEnabledBlockingInitialNavigation()) ],
};
