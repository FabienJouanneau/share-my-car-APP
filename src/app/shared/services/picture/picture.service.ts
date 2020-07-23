import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Picture } from '../../classes/picture';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private static PICTURE_URL = environment.baseUrl + 'pictures';

  constructor(
    private http: HttpClient,
  ) { }

  getPictureById(id: number): Observable < Picture > {
    return this.http.get<Picture>(`${PictureService.PICTURE_URL}/${id}`);
  }
  postPictureByid(picture: Picture): Observable < Picture > {
    return this.http.post<Picture>(`${PictureService.PICTURE_URL}`, picture);
  }
  putPictureByid(picture: Picture): Observable < Picture > {
    return this.http.put<Picture>(`${PictureService.PICTURE_URL}/${picture.pictureId}`, Picture);
  }
  deletePictureByid(picture: Picture): Observable < void > {
    return this.http.delete<void>(`${PictureService.PICTURE_URL}/${picture.pictureId}`);
  }
}
