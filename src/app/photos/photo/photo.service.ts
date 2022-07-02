import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPhotoComment } from 'src/app/shared/interfaces/IPhotoComment';
import { IPhoto } from '../../shared/interfaces/IPhoto';

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

  findById(id: number) {
    return this.http.get<IPhoto>(this.baseUrl + '/photos/' + id);
  }

  getComments(id: number) {
    return this.http.get<IPhotoComment[]>(
      this.baseUrl + '/photos/' + id + '/comments');
  }

  addComment(photoId: number, commentText: string) {
    return this.http.post(
      this.baseUrl + '/photos/' + photoId + '/comments',
      { commentText }
    );

  }
}
