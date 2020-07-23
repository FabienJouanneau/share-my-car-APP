import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../shared/services/user/user.service';
import { AdvertService } from '../../shared/services/advert/advert.service';
import { User } from '../../shared/classes/user';
import { Advert } from '../../shared/classes/advert';
import { Picture } from '../../shared/classes/picture';
import { OptionService } from '../../shared/services/option/option.service';
import { PictureService } from '../../shared/services/picture/picture.service';
import { Option } from '../../shared/classes/option';

@Component({
  selector: 'SMC-advert-form',
  templateUrl: './advert-form.component.html',
  styleUrls: ['./advert-form.component.scss']
})
export class AdvertFormComponent implements OnInit {
  userId: number;
  user: User;
  advertId: number;
  advertModel: Advert;
  displayNewPictureButton = true;
  optionList: Option[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private advertService: AdvertService,
    private optionService: OptionService,
    private pictureService: PictureService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = +paramMap.get('userId');
      this.advertId = +paramMap.get('advertId');
      this.optionService.getAllOptions().subscribe(data => {
        this.optionList = data;
        console.log(this.optionList);

      });
      this.initializeUser(this.userId);
      if (this.advertId){
        this.initializeAdvert(this.advertId);
      } else {
        this.resetAdvertModel();
      }
    });
  }
  initializeUser(id: number){
    this.userService.getUserById(id).subscribe(data => {
      this.user = data;
    });
  }
  initializeAdvert(id: number){
    this.advertService.getAdvertByid(id).subscribe((data) => {
      this.advertModel = data;
      this.toggleDisplayNewPictureButton();
    });
  }
  resetAdvertModel(){
    this.advertModel = {
      carBrand: '',
      carModel: '',
      carKilometers: 0,
      carPricePerDay: 0,
      carRegistrationDate: new Date(Date.now()),
      name: '',
      carEnergy: null,
      carMotor: null,
      pictures: [],
      carOptions: [],
      user: this.user,
    };
  }
  onSubmit(){
    this.advertModel.user = {userId: this.user.userId};
    this.advertModel.name = `${this.advertModel.carBrand} ${this.advertModel.carModel} ${this.advertModel.carRegistrationDate}`;
    console.log(this.advertModel);

    if (this.advertId){
      console.log('edit');
      this.advertService.putAdvertByid(this.advertModel).subscribe(() => {
        this.router.navigateByUrl(`/profile/${this.userId}`);
      });
    } else {
      console.log('new');
      this.advertService.postAdvertByid(this.advertModel).subscribe(() => {
        this.router.navigateByUrl(`/profile/${this.userId}`);
      });
    }
  }
  toggleDisplayNewPictureButton(){
    if (this.advertModel.pictures.length === 4){
      return this.displayNewPictureButton = false;
    } else {
      return this.displayNewPictureButton = true;
    }
  }
  addPicture(){
    this.advertModel.pictures.push({url: ''});
    this.toggleDisplayNewPictureButton();
  }
  addOption(){
    this.advertModel.carOptions.push({carOptionId: 0});
  }
  deletePicture(picture: Picture){
    if (picture.pictureId){
      this.pictureService.deletePictureByid(picture).subscribe();
    } else {
      const index = this.advertModel.pictures.findIndex(element => {
        return picture.url === element.url;
      });
      this.advertModel.pictures.splice(index, 1);
    }
    this.toggleDisplayNewPictureButton();
  }
  deleteOption(option: Option){
    if (option.carOptionId){
      this.optionService.deleteOptionByid(option).subscribe();
    } else {
      const index = this.advertModel.carOptions.findIndex(element => {
        return option.name === element.name;
      });
      this.advertModel.carOptions.splice(index, 1);
    }
  }
}
