import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideNoopAnimations } from "@angular/platform-browser/animations";
import { APP_ROUTES } from "./routes";
import { provideHttpClient } from "@angular/common/http";
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
    providers: [
        provideNoopAnimations(),
        provideHttpClient(),
        provideRouter(APP_ROUTES),
        provideStore(),
        provideStoreDevtools({
            maxAge: 25, // Retains last 25 states
            logOnly: !isDevMode(), // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
            trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
            traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
        }),
    ]
};
