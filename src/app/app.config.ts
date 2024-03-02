import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { AuthInterceptor } from './interceptor/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [{provide: APP_BASE_HREF, useValue: '/ui'}, provideRouter(routes), provideHttpClient(withInterceptorsFromDi()), { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, CommonModule]
};
