import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ZomatoAppComponent } from './zomato-app/zomato-app.component';
import { WeatherInfoAppComponent } from './weather-info-app/weather-info-app.component';
import { ZomatoAuthGuardService } from './guards/zomato-auth-guard.service';
import { WeatherAuthGuardService } from './guards/weather-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ZomatoAppComponent,
    WeatherInfoAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    ZomatoAuthGuardService,
    WeatherAuthGuardService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
