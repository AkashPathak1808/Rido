import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RideWithUsComponent } from './ride-with-us/ride-with-us.component';
import { DriveWithUsComponent } from './drive-with-us/drive-with-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RidesComponent } from './rides/rides.component';
import { HourlyRentalsComponent } from './hourly-rentals/hourly-rentals.component';
import { AirportServiceComponent } from './airport-service/airport-service.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: RidesComponent},
  {path: 'ride-with-us', component: RideWithUsComponent},
  {path: 'drive-with-us', component: DriveWithUsComponent},
  {path: 'about-us', component: AboutUsComponent},
  
  {path:'home', component: RidesComponent},  
  {path:'home-hourly-rentals', component: HourlyRentalsComponent},
  {path:'home-airport-service', component: AirportServiceComponent},

  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
