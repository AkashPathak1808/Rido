import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RideWithUsComponent } from './ride-with-us/ride-with-us.component';
import { DriveWithUsComponent } from './drive-with-us/drive-with-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path: '', redirectTo: 'landing-page', pathMatch: 'full'},
  {path: 'home', component: LandingPageComponent},
  {path: 'ride-with-us', component: RideWithUsComponent},
  {path: 'drive-with-us', component: DriveWithUsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
