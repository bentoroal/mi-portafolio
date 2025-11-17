import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { provideRouter, withViewTransitions, withHashLocation } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

import 'zone.js';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withViewTransitions(), withHashLocation()), provideHttpClient()
  ],
})
  .catch((err) => console.error(err));
