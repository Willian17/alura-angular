import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    authenticate(userName: string, password: string) {
        return this.http.post(this.baseUrl + '/user/login', { userName, password } )
    }
}