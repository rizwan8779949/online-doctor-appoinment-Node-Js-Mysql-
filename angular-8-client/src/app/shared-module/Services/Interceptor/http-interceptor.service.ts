import { Injectable, OnInit } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry, tap, finalize } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import { UtilsService } from "../utils/utils.service";

@Injectable({
  providedIn: "root",
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private utils: UtilsService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.utils.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: token,
        },
      });
      this.utils.startLoading();
      return next.handle(request).pipe(
        tap(
          (event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              this.utils.stopLoading();
            }
          },
          (error) => {
            this.utils.stopLoading();
          }
        )
      );
    } else {
      this.utils.startLoading();
      request = request.clone({
        setHeaders: {
          "Device-Type": "Web",
        },
      });

      return next.handle(request).pipe(
        tap(
          (event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              // this.spinnerService.hide();
              this.utils.stopLoading();
            }
          },
          (error) => {
            // this.spinnerService.hide();
            this.utils.stopLoading();
          }
        )
      );
    }
  }
}
