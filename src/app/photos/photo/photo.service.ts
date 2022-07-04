import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IPhotoComment } from 'src/app/shared/interfaces/IPhotoComment';
import { environment } from 'src/environments/environment';
import { IPhoto } from '../../shared/interfaces/IPhoto';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  baseUrl = environment.apiUrl;

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

    return this.http.post(
      `${this.baseUrl}/photos/upload`,
      formData,
      {
        observe: 'events',
        reportProgress: true
      }
    );
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
  removePhoto(photoId: number) {
    return this.http.delete(this.baseUrl + '/photos/' + photoId);
  }

  like(photoId: number) {
    return this.http.post(
      this.baseUrl + '/photos/' + photoId + '/like', {}, { observe: 'response' }
    )
      .pipe(map(res => true))
      .pipe(catchError(err => {
        return err.status == '304' ? of(false) : throwError(err);
      }));
  }
}
