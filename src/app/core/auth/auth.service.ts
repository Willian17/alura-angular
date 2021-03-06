import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    baseUrl = environment.apiUrl;

    constructor(
        private http: HttpClient,
        private userService: UserService
    ) { }

    authenticate(userName: string, password: string) {
        return this.http
            .post(this.baseUrl + '/user/login',
                { userName, password },
                { observe: 'response' }
            )
            .pipe(tap(res => {
                const authToken = res.headers.get('x-access-token');
                this.userService.setToken(authToken);
            }))
    }
}