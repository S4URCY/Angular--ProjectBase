import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';


/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {


    intercept(request: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        const requestURL: Array<any> = request.url.split('/');
        const apiURL: Array<any> = environment.apiUrl.split('/');
        if (token && (requestURL[2] === apiURL[2])) {
            const newRequest = request.clone({setHeaders: {Authorization: `Bearer  ${token}`}});
            return next.handle(newRequest);
        } else {
            return next.handle(request);
        }
    }
}
