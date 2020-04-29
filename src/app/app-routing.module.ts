import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZomatoAppComponent } from './zomato-app/zomato-app.component';
import { WeatherInfoAppComponent } from './weather-info-app/weather-info-app.component';
import { ZomatoAuthGuardService } from './guards/zomato-auth-guard.service';
import { WeatherAuthGuardService } from './guards/weather-auth-guard.service';



const routes: Routes = [
  { path: '',   redirectTo: '/zomato-list', pathMatch: 'full' },
  {path: 'zomato-list', component: ZomatoAppComponent, canActivate: [ZomatoAuthGuardService]},
  {path: 'weather-info', component: WeatherInfoAppComponent, canActivate: [WeatherAuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
