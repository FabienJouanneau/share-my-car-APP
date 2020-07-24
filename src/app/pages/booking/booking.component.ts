import { Component, OnInit, Input } from '@angular/core';
import { Booking } from '../../shared/classes/booking';
import { Advert } from '../../shared/classes/advert';
import { BookingService } from '../../shared/services/booking/booking.service';
import { User } from '../../shared/classes/user';

@Component({
  selector: 'SMC-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  reservation: Booking = {startingDate: null, endingDate: null, amount: 0};
  daysCounter = 0;
  dateNow = new Date(Date.now());
  @Input() advert: Advert;
  @Input() user: User;

  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    this.reservation.advert = {advertId: this.advert.advertId};
    this.reservation.user = {userId: this.user.userId};
  }
  calculatePrice(){
    const a = +new Date(this.reservation.startingDate);
    const b = +new Date(this.reservation.endingDate);
    const c = +this.dateNow - (1 * 1000 * 60 * 60 * 24) ;
    if (a <= b && a > c && b > c){
      this.daysCounter = (b - a) / (1000 * 60 * 60 * 24) + 1;
      return this.reservation.amount = this.daysCounter * this.advert.carPricePerDay;
    } else {
      this.daysCounter = 0;
      this.reservation.amount = 0;
    }
  }
  onSubmit(){
    this.bookingService.postBooking(this.reservation).subscribe();
  }
}
