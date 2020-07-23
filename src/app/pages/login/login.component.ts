import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'SMC-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() hideForm = new EventEmitter();
  userModel = {email: '', password: ''};
  userId = 1;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.router.navigateByUrl(`/profile/${this.userId}`);
  }
  resetForm(){
    this.userModel = {email: '', password: ''};
    this.hideForm.emit(true);
  }
}
