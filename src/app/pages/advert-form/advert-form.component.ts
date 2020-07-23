import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../shared/services/user/user.service';
import { AdvertService } from '../../shared/services/advert/advert.service';
import { User } from '../../shared/classes/user';
import { Advert } from '../../shared/classes/advert';
import { Picture } from '../../shared/classes/picture';
import { OptionService } from '../../shared/services/option/option.service';
import { PictureService } from '../../shared/services/picture/picture.service';
import { Option } from '../../shared/classes/options';

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
      this.initializeUser(this.userId);
      if (this.advertId){
        this.initializeAdvert(this.advertId);
      } else {
        this.resetAdvertModel();
      }
    });
  }
  initializeUser(id: number): User{
    // this.userService.getUserById(id).subscribe(data => {
    //   this.user = data;
    // });
    return this.user = this.userService.getUserById(id);
  }
  initializeAdvert(id: number): Advert{
    // this.advertService.getAdvertById(id).subscribe(data => {
    //   this.advert = data;
    // });
    this.advertModel = this.advertService.getAdvertByid(id);
    this.toggleDisplayNewPictureButton();
    return this.advertModel;
  }
  resetAdvertModel(){
    this.advertModel = {
      carBrand: '',
      carModel: '',
      carKilometers: 0,
      carPricePerDay: 0,
      carRegistrationDate: null,
      name: '',
      carEnergy: null,
      carMotor: null,
      pictures: [],
      carOptions: [],
      user: {id: this.userId}
    };
  }
  onSubmit(){
    if (this.advertId){
      this.advertService.putAdvertByid(this.advertModel).subscribe(() => {
        this.router.navigateByUrl(`/profile/${this.userId}`);
      });
    } else {
      console.log('new');
      this.advertService.postAdvertByid(this.advertModel);
    }
    console.log(this.advertModel);
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
    this.advertModel.carOptions.push({name: ''});
  }
  deletePicture(picture: Picture){
    if (picture.id){
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
    if (option.id){
      this.optionService.deleteOptionByid(option).subscribe();
    } else {
      const index = this.advertModel.carOptions.findIndex(element => {
        return option.name === element.name;
      });
      this.advertModel.carOptions.splice(index, 1);
    }
  }
}
