import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {AuthenticationService} from "../services/authentication.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public authenticationService: AuthenticationService) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authenticationService.getToken()}`
      }
    });
    return next.handle(request);
  }
}
