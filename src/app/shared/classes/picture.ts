import { Advert } from './advert';

export class Picture{
  public id?: number;
  public url: string;
  public advert?: Advert | {id?: number};

  constructor(
    url: string,
    id?: number,
    advert?: Advert | {id?: number},
  ){
    this.id = id;
    this.url = url;
    this.advert = advert;
  }
}
