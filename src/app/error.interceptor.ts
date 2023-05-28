import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Произошла ошибка.';

        if (error.error instanceof ErrorEvent) {
          errorMessage = `Ошибка: ${error.error.message}`;
        } else {
          errorMessage = `Ошибка ${error.status}: ${error.error.message}`;
        }
        return throwError(errorMessage);
      })
    );
  }
}
