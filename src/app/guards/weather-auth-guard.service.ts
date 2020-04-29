import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class WeatherAuthGuardService implements CanActivate {
  
  // you would usually put this in it's own service and not access it directly!
  // this is just for the sake of the demo.
  isLoggedIn: boolean = false;

  constructor(
    private router: Router
  ) {
    this.isLoggedIn = localStorage.getItem('user-role') !== 'a' && localStorage.getItem('user-role') !== null ?
        true : false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isLoggedIn) {
      return true;
    } else {
        localStorage.getItem('user-role') !== null ? this.router.navigate(['zomato-list']): alert('Please log in');
        return false;
    }
  }

}