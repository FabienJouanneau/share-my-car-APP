import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import {FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AdvertListComponent } from './pages/advert-list/advert-list.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdvertFormComponent } from './pages/advert-form/advert-form.component';
import { AdvertDetailsComponent } from './pages/advert-details/advert-details.component';
import { AuthInterceptor } from './shared/core/interceptors/auth.interceptor';
import { BookingComponent } from './pages/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdvertListComponent,
    NavBarComponent,
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    ProfileComponent,
    AdvertFormComponent,
    AdvertDetailsComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
