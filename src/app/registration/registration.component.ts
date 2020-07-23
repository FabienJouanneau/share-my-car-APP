import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'SMC-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  userModel: User;
  userId = 1;
  @Output() hideForm = new EventEmitter();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initializeUserModel();
  }
  initializeUserModel(){
    this.userModel = {
      lastName: '',
      firstName: '',
      email: '',
      password: '',
      phoneNumber: '',
      birthDate: null,
      addressStreet: '',
      addressZipCode: '',
      addressCityName: '',
      addressCountryName: '',
      ribOwnerFullName: '',
      ribBankName: '',
      ribBicCode: '',
      ribIbanNumber: '',
      adverts: [],
      drivingLicenceOwner: '',
      drivingLicenceNumber: '',
      drivingLicenceDate: null,
      role: 'client',
      bookings: [],
    };
  }
  onSubmit(){
    this.router.navigateByUrl(`/profile/${this.userId}`);
  }
  resetForm(){
    this.initializeUserModel();
    this.hideForm.emit(true);
  }
}
