import { Injectable } from '@angular/core';
import { Advert } from '../../classes/advert';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {
  private static ADVERT_URL = environment.baseUrl + 'adverts';

  constructor(
    private http: HttpClient,
  ) { }

  getAllAdverts(): Observable<Advert[]>{
    return this.http.get<Advert[]>(`${AdvertService.ADVERT_URL}`);
  }
  getAdvertByid(id: number): Observable<Advert>{
    return this.http.get<Advert>(`${AdvertService.ADVERT_URL}/${id}`);
  }
  postAdvertByid(advert: Advert): Observable<Advert>{
    return this.http.post<Advert>(`${AdvertService.ADVERT_URL}`, advert);
  }
  putAdvertByid(advert: Advert): Observable<Advert>{
    return this.http.put<Advert>(`${AdvertService.ADVERT_URL}/${advert.advertId}`, advert);
  }
  deleteAdvertByid(advertId: number): Observable<void>{
    return this.http.delete<void>(`${AdvertService.ADVERT_URL}/${advertId}`);
  }
}
