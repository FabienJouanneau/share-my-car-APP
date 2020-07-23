import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'SMC-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  displayDeconnexionButton: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    setInterval(() => {
      this.connexionTest();
    }, 200);
  }
  connexionTest(){
    if (localStorage.getItem('token')){
      this.displayDeconnexionButton = true;
    } else {
      this.displayDeconnexionButton = false;
    }
  }
  deconnectUser(){
    this.authService.removeToken();
    this.displayDeconnexionButton = false;
  }
  navigate(){
    const userId = localStorage.getItem('userId');
    if (userId){
      this.router.navigateByUrl(`/profile/${userId}`);
    } else {
      this.router.navigateByUrl('/auth');
    }
  }
}

