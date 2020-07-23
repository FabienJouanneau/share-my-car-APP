import { Advert } from './advert';
import { Booking } from './booking';

export class User{
  public userId?: number;
  public firstName: string;
  public lastName: string;
  public birthDate: Date;
  public email: string;
  public password: string;
  public phoneNumber: string;
  public addressStreet: string;
  public addressZipCode: string;
  public addressCityName: string;
  public addressCountryName: string;
  public ribOwnerFullName: string;
  public ribBankName: string;
  public ribIbanNumber: string;
  public ribBicCode: string;
  public drivingLicenceOwner: string;
  public drivingLicenceNumber: string;
  public drivingLicenceDate: Date;
  public role?: 'admin' | 'client';
  public adverts: Advert[];
  public bookings?: Booking[];

  constructor(
    firstName: string,
    lastName: string,
    birthDate: Date,
    email: string,
    password: string,
    phoneNumber: string,
    addressStreet: string,
    addressZipCode: string,
    addressCityName: string,
    addressCountryName: string,
    ribOwnerFullName: string,
    ribBankName: string,
    ribIbanNumber: string,
    ribBicCode: string,
    drivingLicenceOwner: string,
    drivingLicenceNumber: string,
    drivingLicenceDate: Date,
    adverts: Advert[],
    bookings?: Booking[],
    role?: 'admin' | 'client',
    userId?: number,
  ){
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.addressStreet = addressStreet;
    this.addressZipCode = addressZipCode;
    this.addressCityName = addressCityName;
    this.addressCountryName = addressCountryName;
    this.ribOwnerFullName = ribOwnerFullName;
    this.ribBankName = ribBankName;
    this.ribIbanNumber = ribIbanNumber;
    this.ribBicCode = ribBicCode;
    this.drivingLicenceOwner = drivingLicenceOwner;
    this.drivingLicenceNumber = drivingLicenceNumber;
    this.drivingLicenceDate = drivingLicenceDate;
    this.adverts = adverts;
    this.bookings = bookings;
    this.role = role;
  }
}
