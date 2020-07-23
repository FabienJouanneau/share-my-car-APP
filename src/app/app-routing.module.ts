import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdvertListComponent } from './pages/advert-list/advert-list.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdvertFormComponent } from './pages/advert-form/advert-form.component';
import { AdvertDetailsComponent } from './pages/advert-details/advert-details.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'find-my-car', component: AdvertListComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'profile/:userId', component: ProfileComponent},
  {path: 'adverts/:advertId', component: AdvertDetailsComponent},
  {path: 'profile/:userId/my-advert/:advertId', component: AdvertFormComponent},
  {path: 'profile/:userId/new-advert', component: AdvertFormComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
