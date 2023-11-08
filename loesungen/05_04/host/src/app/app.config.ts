import { ApplicationConfig } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideNoopAnimations } from "@angular/platform-browser/animations";
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
    providers: [
        provideNoopAnimations(),
        provideHttpClient(),
        provideRouter(appRoutes, withEnabledBlockingInitialNavigation()) ],
};
