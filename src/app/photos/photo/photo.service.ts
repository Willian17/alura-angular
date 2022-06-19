import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPhoto } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  baseUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  listFromUser(userName: string) {
    return this.http
      .get<IPhoto[]>(`${this.baseUrl}/${userName}/photos`)
  }
}
