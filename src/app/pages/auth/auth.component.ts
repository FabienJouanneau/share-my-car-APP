import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SMC-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authType: 'registration' | 'login' | '';
  displayButton: boolean;

  constructor() { }

  ngOnInit(): void {
    this.authType = '';
    this.displayButton = true;
  }
  selectAuth(value){
    this.authType = value;
    this.displayButton = false;
  }
  toggleForm(value: boolean){
    this.displayButton = value;
    this.authType = '';
  }
}
