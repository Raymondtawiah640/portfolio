<<<<<<< HEAD
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
=======
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
>>>>>>> c3704f358ee1d84d19d02f45d033e4f973b95e30
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
<<<<<<< HEAD
=======
    provideZoneChangeDetection({ eventCoalescing: true }),
>>>>>>> c3704f358ee1d84d19d02f45d033e4f973b95e30
    provideRouter(routes)
  ]
};
