export class Booking{
  public id?: number;
  public userId: {id?: number};
  public advertId: {id?: number};
  public startingDate: Date;
  public endingDate: Date;
  public amount: number;

  constructor(
    userId: {id: number},
    advertId: {id: number},
    startingDate: Date,
    endingDate: Date,
    amount: number,
    id?: number,
  ){
    this.id = id;
    this.userId = userId;
    this.advertId = advertId;
    this.startingDate = startingDate;
    this.endingDate = endingDate;
    this.amount = amount;
  }
}
