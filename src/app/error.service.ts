import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http'
import * as Sentry from "@sentry/angular";
import { Integrations } from '@sentry/tracing';
Sentry.init({
  dsn: "https://f1bbc2f55c7b4f1794abaa8f2618344e@sentry.yo-digital.com/42",
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: [
        'localhost',

      ],
      routingInstrumentation: Sentry.routingInstrumentation,
    })
  ]
});
@Injectable({
  providedIn: 'root'
})
export class SentryErrorHandler implements ErrorHandler {
  componentType: string = null;

  constructor(private injector: Injector) { }

  handleError(error: any) {
    Sentry.configureScope(scope => {
      scope.setExtra('stackTrace', error);
      scope.setTag('app_name', 'crash-portal-ui');
      // scope.setTag('environment', environment.environment);
      if (this.componentType) {
        scope.setTag('use-case', this.componentType);
      }
      else {
        scope.setTag('use-case', 'Internal Error');
      }
    }

    )
    const router = this.injector.get(Router);
    //capture error to sentry cloud
    const eventId = Sentry.captureException(error.originalError || error);
    if (Error instanceof HttpErrorResponse) {
      console.log(error.status);
    }
    else {
      console.error("Error:" + error);
    }


    return error;
    //pass the error if needed
  }
}


