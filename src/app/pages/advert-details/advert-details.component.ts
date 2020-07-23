import { Component, OnInit } from '@angular/core';
import { AdvertService } from '../../shared/services/advert/advert.service';
import { UserService } from '../../shared/services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { Advert } from '../../shared/classes/advert';

@Component({
  selector: 'SMC-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.scss']
})
export class AdvertDetailsComponent implements OnInit {
  advertId: number;
  advert: Advert;
  dislpayOptions = false;
  optionsLength: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private advertService: AdvertService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.advertId = +paramMap.get('advertId');
      this.initializeAdvert(this.advertId);
    });
  }
  initializeAdvert(id: number){
    // this.advertService.getAdvertByid(id).subscribe(data => {
    //   this.advert = data;
    // });
    this.advert = this.advertService.getAdvertByid(id);

    let i = 1;
    for (let index = 0; index < this.advert.carOptions.length; index++) {
      if ((index % 3) === 0){
        this.optionsLength.push(i);
        i ++;
      }
    }
  }
  toggleDisplayOptions(){
    this.dislpayOptions = !this.dislpayOptions;
  }
}
