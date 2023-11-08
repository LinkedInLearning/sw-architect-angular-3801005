import { ApplicationConfig } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, } from '@angular/router';
import { remoteRoutes } from "./remote-entry/entry.routes";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(remoteRoutes, withEnabledBlockingInitialNavigation()) ],
};
