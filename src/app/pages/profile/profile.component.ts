import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user/user.service';
import { AdvertService } from '../../shared/services/advert/advert.service';
import { User } from '../../shared/classes/user';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Advert } from '../../shared/classes/advert';
import { BookingService } from '../../shared/services/booking/booking.service';

@Component({
  selector: 'SMC-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  userId: number;
  userAdverts: Advert[] = [];
  displayReservation = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private advertService: AdvertService,
    private bookingService: BookingService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = +paramMap.get('userId');
      this.initializeUser(this.userId);
    });
  }
  initializeUser(id: number){
    this.userService.getUserById(id).subscribe(data => {
      this.user = data;
      console.log(this.user.bookings);

      this.user.bookings.sort((a, b) => {
        return +new Date(b.endingDate) - +new Date(a.endingDate);
      });
      this.user.bookings.forEach(booking => {
        this.advertService.getAdvertByid(+booking.advert).subscribe(element => {
          booking.advert = element;
          this.userService.getUserById(+element.user).subscribe(user => {
            element.user = user;
          });
        });
      });
    });
  }
  toggleDisplayReservation(){
    this.displayReservation = ! this.displayReservation;
  }
  deleteBooking(id){
    this.bookingService.deleteBookingById(id).subscribe(() => {
      this.initializeUser(this.userId);
    });
  }
  deleteAdvert(id){
    this.advertService.deleteAdvertByid(id).subscribe(() => {
      this.initializeUser(this.userId);
    });
  }
}
