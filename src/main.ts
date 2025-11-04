import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { provideRouter, withViewTransitions, withHashLocation } from '@angular/router';
import { routes } from './app/app.routes';

import 'zone.js';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withViewTransitions(), withHashLocation()),
  ],
})
  .catch((err) => console.error(err));
