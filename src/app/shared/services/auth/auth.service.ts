import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { User } from '../../classes/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static LOGIN_URL = environment.baseUrl + 'login';
  private static GET_ME_URL = environment.baseUrl + 'users/me';
  token;
  user;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(user: {email: string, password: string}){
    console.log(user);
    return this.http.post(AuthService.LOGIN_URL, user, {observe: 'response'}).subscribe((resp) => {
      localStorage.setItem('token', resp.headers.get('Authorization'));
      this.token = localStorage.getItem('token');
      this.getMe();
    });
  }

  getMe(){
    this.http.get(AuthService.GET_ME_URL).subscribe(data => {
      this.user = data;
      localStorage.setItem('userId', this.user.userId.toString());
      if (this.token != null){
        this.router.navigateByUrl(`/profile/${this.user.userId}`);
      }
    });
  }

  removeToken(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigateByUrl(`/find-my-car`);
  }


}
