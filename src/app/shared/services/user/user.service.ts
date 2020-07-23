import { Injectable } from '@angular/core';
import { User } from '../../classes/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static USER_URL = environment.baseUrl + 'users';

  userTest: User = {
    id: 1,
    firstName: 'Paul',
    lastName: 'Lochon',
    birthDate: new Date('04/30/1988'),
    email: 'paul.lochon@dodo.com',
    phoneNumber: '0569309913',
    password: '1234567890',
    addressStreet: '1 rue de la Devise',
    addressZipCode: '33000',
    addressCityName: 'Bordeaux',
    addressCountryName: 'France',
    ribOwnerFullName: 'Paul Lochon',
    ribBankName: 'Boursorama',
    ribIbanNumber: 'FR76 3000 4041 04984 9405 0393 100',
    ribBicCode: 'FRPP BCC XXX',
    drivingLicenceOwner: 'Paul Lochon',
    drivingLicenceNumber: '12445930234',
    drivingLicenceDate: new Date('20/05/2007'),
    adverts: [{
      id: 4,
      name: 'Audi A4 2005 92',
      carBrand: 'Audi',
      carModel: 'A4',
      carRegistrationDate: new Date('01/30/2005'),
      carKilometers: 92474,
      carPricePerDay: 92,
      carEnergy: 'Essence',
      carMotor: 'Manuel',
      pictures: [{url: 'https://www.audi.fr/content/dam/nemo/models/a4/a4-limousine/my-2020/1920x1080-inline-media-gallery/1920x1080_AA4_L_191001.jpg'}],
      carOptions: [],
    }],
    bookings: [{
      id: 1,
      startingDate: new Date('07/19/2020'),
      endingDate: new Date('07/20/2020'),
      amount: 90,
      userId: {id: 1},
      advertId: {id: 5},
    }]
  };
  constructor(
    private http: HttpClient,
  ) { }

  getUserById(id: number){
  // getUserById(id: number): Observable<User>{
    // return this.http.get<User>(`${UserService.USER_URL}/${id}`);
    console.log(this.userTest);
    return this.userTest;
  }
  postUserByid(user: User): Observable<User>{
    return this.http.post<User>(`${UserService.USER_URL}`, user);
  }
  putUserByid(user: User): Observable<User>{
    return this.http.put<User>(`${UserService.USER_URL}/${user.id}`, user);
  }
  deleteUserByid(user: User): Observable<void>{
    return this.http.delete<void>(`${UserService.USER_URL}/${user.id}`);
  }
}
