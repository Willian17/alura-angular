import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/core/user/user.service";
import { environment } from "src/environments/environment";
import * as StackTrace from "stacktrace-js";
import { ServerLogService } from "./server-log.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) {
    }

    handleError(error: any): void {
        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);
        const serverLogService = this.injector.get(ServerLogService);
        const router = this.injector.get(Router);

        const url = location instanceof PathLocationStrategy
            ? location.path()
            : '';

        const message = error.message
            ? error.message :
            error.toString();

        environment.production && router.navigate(['/error']);
        
        StackTrace
            .fromError(error)
            .then(stackFrames => {
                const stackAsString = stackFrames
                    .map(sf => sf.toString())
                    .join('\n')
                console.log(message);
                console.log(stackAsString);
                console.log('o que será enviado para o servidor')
                serverLogService.log(
                    {
                        message, url,
                        userName: userService.getUserName(),
                        stack: stackAsString
                    }
                ).subscribe(
                    () => console.log('Error logged on server successfully'),
                    (error) => console.log('Failed to send error to server')
                )
            });
    }
}