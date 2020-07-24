import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../shared/classes/user';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user/user.service';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'SMC-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  userModel: User;
  @Output() hideForm = new EventEmitter();

  constructor(
    private userService: UserService,
    private authService: AuthService,
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
    console.log(this.userModel);
    this.userService.postUser(this.userModel).subscribe(() => {
      this.authService.login({email: this.userModel.email, password: this.userModel.password});
    });
  }
  resetForm(){
    this.initializeUserModel();
    this.hideForm.emit(true);
  }
}
