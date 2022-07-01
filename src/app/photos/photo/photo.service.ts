import { HttpClient, HttpParams } from '@angular/common/http';
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

  listFromUser(userName: string, page: number = 1) {
    const params = new HttpParams()
      .append('page', page.toString())

    return this.http
      .get<IPhoto[]>(`${this.baseUrl}/${userName}/photos`, { params })
  }

  upload(description: string, allowComments: boolean, file: File) {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', `${allowComments}`);
    formData.append('imageFile', file);

    return this.http.post(`${this.baseUrl}/photos/upload`, formData);
  }

  findById(id: string) {
    return this.http.get<IPhoto>(this.baseUrl + '/photos/' + id);
  }
}
