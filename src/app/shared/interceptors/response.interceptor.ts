import { HttpErrorResponse, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { delay, map, mergeMap, retryWhen } from "rxjs/operators";
import { UserService } from "src/app/core/user/user.service";
import { TokenService } from "../../core/token/token.service";
import { AlertService } from "../components/alert/alert.service";

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

    constructor(
        private router: Router,
        private alertService: AlertService,
        private userService: UserService,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent
        | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

        return next
            .handle(req)
            .pipe(retryWhen((error) => {
                return error.pipe(mergeMap((error: HttpErrorResponse) => {
                    switch (error.status) {
                        case 401:
                            this.userService.logout();
                            this.router.navigate(['']);
                            break;
                        case 404:
                            this.router.navigate(['not-found']);
                            break;
                    }
                    if (error.error.message) {
                        this.alertService.warning(error.error.message);
                    }
                    throw error;
                }));
            }))
    }
}