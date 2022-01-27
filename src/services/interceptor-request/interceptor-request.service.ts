import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorRequestService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const refresh: string | null = this.getRefresh() || '';
    const HEADERS = new HttpHeaders({'Authorization': refresh});
    const REQ_INTERCEPT = req.clone({headers: HEADERS});
    console.log('REQ_INTERCEPT: ', REQ_INTERCEPT);
    return next.handle(REQ_INTERCEPT).pipe();
  }

  getRefresh(): string | null {
    return localStorage.getItem('refresh')
      ? JSON.parse(<string>localStorage.getItem('refresh'))
      : null;
  }

}
