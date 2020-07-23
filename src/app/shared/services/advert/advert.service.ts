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

  advertTest: Advert[] = [
    {
      id: 1,
      name: 'RENAULT Captur 2005 68',
      carBrand: 'RENAULT',
      carModel: 'Captur',
      carRegistrationDate: new Date('02/17/2005'),
      carKilometers: 48903,
      carPricePerDay: 68,
      carEnergy: 'Essence',
      carMotor: 'Automatique',
      carOptions: [],
      pictures: [{id: 1, url: 'https://images.caradisiac.com/logos-ref/modele/modele--renault-captur-2/S0-modele--renault-captur-2.jpg'}]
    },
    {
      id: 2,
      name: 'RENAULT Captur 2001 90',
      carBrand: 'RENAULT',
      carModel: 'Captur',
      carRegistrationDate: new Date('07/01/2020'),
      carKilometers: 530,
      carPricePerDay: 90,
      carEnergy: 'Gasoil',
      carMotor: 'Manuel',
      carOptions: [],
      pictures: [{id: 2, url: 'https://www.turbo.fr/sites/default/files/styles/article_690x405/public/2019-10/renault-captur-2-essai-logo.png?itok=tNp32rfu'}]
    },
    {
      id: 3,
      name: 'RENAULT Megane 2005 55',
      carBrand: 'RENAULT',
      carModel: 'Megane',
      carRegistrationDate: new Date('06/25/2005'),
      carKilometers: 127431,
      carPricePerDay: 55,
      carEnergy: 'Gasoil',
      carMotor: 'Manuel',
      carOptions: [
        {id: 1, name: 'Climatisation'},
        {id: 2, name: 'Caméra de recul'},
        {id: 3, name: 'Toit ouvrant'},
        {id: 4, name: 'Attelage'},
      ],
      pictures: [
        {id: 3, url: 'https://www.turbo.fr/sites/default/files/styles/large/public/2019-02/renault-megane-4.png?itok=kV7Ptxo6'},
        {id: 6, url: 'https://www.turbo.fr/sites/default/files/styles/large/public/2019-02/renault-megane-4.png?itok=kV7Ptxo6'},
        {id: 7, url: 'https://www.turbo.fr/sites/default/files/styles/large/public/2019-02/renault-megane-4.png?itok=kV7Ptxo6'},
        {id: 8, url: 'https://www.turbo.fr/sites/default/files/styles/large/public/2019-02/renault-megane-4.png?itok=kV7Ptxo6'},
      ]
    },
    {
      id: 4,
      name: 'Audi A4 2005 92',
      carBrand: 'Audi',
      carModel: 'A4',
      carRegistrationDate: new Date('01/30/2005'),
      carKilometers: 92474,
      carPricePerDay: 92,
      carEnergy: 'Essence',
      carMotor: 'Manuel',
      carOptions: [],
      pictures: [{id: 4, url: 'https://www.audi.fr/content/dam/nemo/models/a4/a4-limousine/my-2020/1920x1080-inline-media-gallery/1920x1080_AA4_L_191001.jpg'}]
    },
    {
      id: 5,
      name: 'Audi A3 2009 90',
      carBrand: 'Audi',
      carModel: 'A3',
      carRegistrationDate: new Date('03/15/2009'),
      carKilometers: 41644,
      carPricePerDay: 90,
      carEnergy: 'Essence',
      carMotor: 'Manuel',
      carOptions: [],
      pictures: [{id: 5, url: 'https://images.caradisiac.com/images/3/5/7/9/183579/S1-essai-video-audi-a3-sportback-2020-en-quete-de-leadership-632129.jpg'}]
    },
  ];
  constructor(
    private http: HttpClient,
  ) { }

  getAllAdverts(){
  // getAllAdverts(): Observable<Advert[]>{
    // return this.http.get<Advert[]>(`AdvertService.ADVERT_URL`);
    return this.advertTest;
  }
  getAdvertByid(id: number){
    return this.advertTest.find(advert => {
      return advert.id === id;
    });
  // getAdvertByid(id: number): Observable<Advert>{
    // return this.http.get<Advert>(`${AdvertService.ADVERT_URL}/${id}`);
  }
  postAdvertByid(advert: Advert): Observable<Advert>{
    return this.http.post<Advert>(`${AdvertService.ADVERT_URL}`, advert);
  }
  putAdvertByid(advert: Advert): Observable<Advert>{
    return this.http.put<Advert>(`${AdvertService.ADVERT_URL}/${advert.id}`, advert);
  }
  deleteAdvertByid(advert: Advert): Observable<void>{
    return this.http.delete<void>(`${AdvertService.ADVERT_URL}/${advert.id}`);
  }
}
