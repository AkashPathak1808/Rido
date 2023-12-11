import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RideWithUsComponent } from './ride-with-us/ride-with-us.component';
import { DriveWithUsComponent } from './drive-with-us/drive-with-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { UpperFooterComponent } from './upper-footer/upper-footer.component';

import { RidesComponent } from './rides/rides.component';
import { HourlyRentalsComponent } from './hourly-rentals/hourly-rentals.component';
import { AirportServiceComponent } from './airport-service/airport-service.component';
import { RidoBusinessComponent } from './rido-business/rido-business.component';
import { FooterComponent } from './footer/footer.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    RideWithUsComponent,
    DriveWithUsComponent,
    AboutUsComponent,
    UpperFooterComponent,
    RidesComponent,
    HourlyRentalsComponent,
    AirportServiceComponent,
    RidoBusinessComponent,
    FooterComponent,
    TermsandconditionsComponent,
    ContactusComponent,
    FaqComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
