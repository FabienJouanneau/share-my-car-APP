import { Advert } from './advert';

export class Picture{
  public pictureId?: number;
  public url: string;
  public advert?: Advert | {id?: number};

  constructor(
    url: string,
    pictureId?: number,
    advert?: Advert | {id?: number},
  ){
    this.pictureId = pictureId;
    this.url = url;
    this.advert = advert;
  }
}
