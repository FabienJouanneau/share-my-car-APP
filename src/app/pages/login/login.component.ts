import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'SMC-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() hideForm = new EventEmitter();
  userModel = {email: '', password: ''};

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.authService.login(this.userModel);
  }
  resetForm(){
    this.userModel = {email: '', password: ''};
    this.hideForm.emit(true);
  }
}
