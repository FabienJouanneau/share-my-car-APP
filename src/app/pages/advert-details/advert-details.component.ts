import { Component, OnInit } from '@angular/core';
import { AdvertService } from '../../shared/services/advert/advert.service';
import { ActivatedRoute } from '@angular/router';
import { Advert } from '../../shared/classes/advert';
import { BookingService } from '../../shared/services/booking/booking.service';
import { UserService } from '../../shared/services/user/user.service';
import { User } from '../../shared/classes/user';
import { Booking } from '../../shared/classes/booking';

@Component({
  selector: 'SMC-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.scss']
})
export class AdvertDetailsComponent implements OnInit {
  advertId: number;
  advert: Advert;
  user: User;
  dislpayOptions = false;
  displayReservation = false;
  optionsLength: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private advertService: AdvertService,
    private bookingService: BookingService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.advertId = +paramMap.get('advertId');
      this.initializeAdvert(this.advertId);
    });
    this.initializeUser();
  }
  initializeAdvert(id: number){
    this.advertService.getAdvertByid(id).subscribe(data => {
      this.advert = data;
      let i = 1;
      for (let index = 0; index < this.advert.carOptions.length; index++) {
        if ((index % 3) === 0){
          this.optionsLength.push(i);
          i ++;
        }
      }
    });
  }
  initializeUser(){
    this.userService.getUserById(+localStorage.getItem('userId')).subscribe(data => {
      this.user = data;
    });
  }
  toggleDisplayOptions(){
    this.dislpayOptions = !this.dislpayOptions;
  }
  toggleDisplayReservation(){
    this.displayReservation = !this.displayReservation;
  }
  postReservation(reservation: Booking){
    console.log(reservation);
    this.bookingService.postBooking(reservation).subscribe();
  }
}
