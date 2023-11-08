import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppConfig } from './app/app.config';


bootstrapApplication(AppComponent, AppConfig)
  .catch(err => console.error(err));
