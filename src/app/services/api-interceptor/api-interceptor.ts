import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { environment } from '../../../environments/environment';

import swal from 'sweetalert2';
import { UiService } from "../ui/ui.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {


    constructor(
        private ui: UiService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('access_token');

        const contentType = req.headers.get('Content-Type') || 'application/json';
        let headers = req.headers;

        if (!headers.get('no-content-type')) {
            headers = headers.set('Content-Type', 'application/json');
        }

        const noErrorHandling = !!headers.get('no-error-handling');

        if (token) {
            headers = headers.set('Authorization', 'Bearer ' + token);
        }

        const url = req.url.includes('auth') || req.url.startsWith('/bmi-')
            ? req.url
            : '/bmi-admin' + req.url;

        req = req.clone({
            headers,
            url: environment.apiUrl + '/api' + url
        });
        return next.handle(req)
            .catch(err => {
                let errorObj = {};
                if (err instanceof HttpErrorResponse) {
                    const error = err.error;
                    if (noErrorHandling) {
                        return Observable.throw(err.error);
                    } else if (error.status_code >= 500) {
                        swal('Oops!', 'Something went wrong', 'error');
                        // this.ui.loader.reset();
                    } else if (error.message) {
                        if (localStorage.getItem('jwt-logout')) {
                            localStorage.removeItem('jwt-logout');
                        } else {
                            swal('Oops!', error.message, 'error');
                        }
                    } else if (error.errmsg) {
                        const msg = error.errmsg;
                        if (typeof msg === 'string') {
                            swal('Warning', msg, 'warning');
                        } else {
                            Object.keys(msg).forEach(key => {
                                errorObj[key] = msg[key][0];
                            });
                        }
                    } else {
                        swal('Oops!', 'Something went wrong', 'error');
                    }
                }
                return Observable.throw(errorObj);
            });
    }
}
