import { Advert } from './advert';

export class Option{
  public id?: number;
  public name: string;
  public adverts?: Advert[] | {id: number}[];

  constructor(
    name: string,
    adverts?: Advert[] | {id: number}[],
    id?: number,
  ){
    this.id = id;
    this.name = name;
    this.adverts = adverts;
  }
}
