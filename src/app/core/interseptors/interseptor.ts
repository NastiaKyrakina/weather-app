import { HttpEvent, HttpEventType, HttpHandlerFn, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export function apiKeyInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  if (req.url.startsWith(environment.weatherApi)) {
    const newReq = req.clone({
      params: (req.params ? req.params :
        new HttpParams())
        .set('appid', environment.apiKey)
    });
    return next(newReq);
  }
  return next(req);
}
