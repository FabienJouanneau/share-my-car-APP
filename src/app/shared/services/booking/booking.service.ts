import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Booking } from '../../classes/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  static BOOKING_URL = environment.baseUrl + 'bookings';

  constructor(
    private http: HttpClient,
  ) { }

  getAllBookings(): Observable<Booking[]>{
    return this.http.get<Booking[]>(BookingService.BOOKING_URL);
  }
  getBookingById(id: number): Observable<Booking>{
    return this.http.get<Booking>(`${BookingService.BOOKING_URL}/${id}`);
  }
  postBooking(booking: Booking): Observable<Booking>{
    return this.http.post<Booking>(BookingService.BOOKING_URL, booking);
  }
  putBookingById(booking: Booking): Observable<Booking>{
    return this.http.put<Booking>(`${BookingService.BOOKING_URL}/${booking.bookingId}`, booking);
  }
  deleteBookingById(id: number){
     return this.http.delete<void>(`${BookingService.BOOKING_URL}/${id}`);
  }
}
