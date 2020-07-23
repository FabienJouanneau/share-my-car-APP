import { User } from './user';
import { Picture } from './picture';
import { Option } from './options';

export class Advert{
  public id?: number;
  public name: string;
  public carBrand: string;
  public carModel: string;
  public carRegistrationDate: Date;
  public carKilometers: number;
  public carPricePerDay: number;
  public carEnergy: 'Essence' | 'Gasoil' | 'Electrique' | 'GPL';
  public carMotor: 'Automatique' | 'Manuel';
  public pictures?: Picture[];
  public carOptions?: Option[];
  public user?: User | {id?: number};

  constructor(
    name: string,
    carBrand: string,
    carModel: string,
    carRegistrationDate: Date,
    carKilometers: number,
    carPricePerDay: number,
    carEnergy: 'Essence' | 'Gasoil' | 'Electrique' | 'GPL',
    carMotor: 'Automatique' | 'Manuel',
    pictures?: Picture[],
    carOptions?: Option[],
    user?: User | {id?: number},
    id?: number,
  ){
    this.id = id;
    this.name = name;
    this.carBrand = carBrand;
    this.carModel = carModel;
    this.carRegistrationDate = carRegistrationDate;
    this.carKilometers = carKilometers;
    this.carPricePerDay = carPricePerDay;
    this.carEnergy = carEnergy;
    this.carMotor = carMotor;
    this.pictures = pictures;
    this.carOptions = carOptions;
    this.user = user;
  }
}
