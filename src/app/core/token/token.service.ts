import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class TokenService {
  KEY = '@alurapic/authToken';

  hasToken() {
    return this.getToken();
  }

  setToken(token) {
    window.localStorage.setItem(this.KEY, token);
  }

  getToken() {
    return window.localStorage.getItem(this.KEY);
  }

  removeToken() {
    window.localStorage.removeItem(this.KEY);
  }
}