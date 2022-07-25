import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INewUser } from './INewUser';
import { environment } from 'src/environments/environment';


@Injectable()
export class SignUpService {
  baseUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  checkUserNameTaken(userName: string) {
    return this.http.get(this.baseUrl + '/user/exists/' + userName);
  }
  signup(newUser: INewUser) {
    return this.http.post(this.baseUrl + '/user/signup', newUser);
}
}