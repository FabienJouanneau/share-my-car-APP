import { Advert } from './advert';

export class Option{
  public carOptionId?: number;
  public name?: string;
  public adverts?: Advert[] | {id: number}[];

  constructor(
    carOptionId?: number,
    name?: string,
    adverts?: Advert[] | {id: number}[],
  ){
    this.carOptionId = carOptionId;
    this.name = name;
    this.adverts = adverts;
  }
}
