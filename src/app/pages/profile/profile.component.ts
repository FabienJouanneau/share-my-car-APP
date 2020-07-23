import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user/user.service';
import { AdvertService } from '../../shared/services/advert/advert.service';
import { User } from '../../shared/classes/user';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'SMC-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  userId: number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private advertService: AdvertService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = +paramMap.get('userId');
      this.initializeUser(this.userId);
    });
  }
  initializeUser(id: number){
    this.user = this.userService.getUserById(id);
    // this.userService.getUserById(id).subscribe(data => {
    //   this.user = data;
    // });
  }
}
