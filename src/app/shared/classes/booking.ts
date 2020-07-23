import { User } from './user';
import { Advert } from './advert';

export class Booking{
  public bookingId?: number;
  public user?: User | {userId?: number};
  public advert?: Advert | {advertId?: number};
  public startingDate: Date;
  public endingDate: Date;
  public amount: number;

  constructor(
    startingDate: Date,
    endingDate: Date,
    amount: number,
    user?: User | {userId?: number},
    advert?: Advert | {advertId?: number},
    bookingId?: number,
  ){
    this.bookingId = bookingId;
    this.user = user;
    this.advert = advert;
    this.startingDate = startingDate;
    this.endingDate = endingDate;
    this.amount = amount;
  }
}
