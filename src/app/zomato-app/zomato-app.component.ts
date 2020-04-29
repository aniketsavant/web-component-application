import { Component, OnInit } from '@angular/core';
import { Restaurant2 } from '../interface';

@Component({
  selector: 'app-zomato-app',
  templateUrl: './zomato-app.component.html',
  styleUrls: ['./zomato-app.component.scss']
})
export class ZomatoAppComponent implements OnInit {
  
  public restDetail: Restaurant2;
  public showDetailPage: boolean = false;
  constructor( ) {
  }

  ngOnInit(): void {
  }

  public getRestoData(data): void {
    // console.log("getRestoData========>", data.detail.restaurant);
    this.showDetailPage = true;
    this.restDetail = data.detail.restaurant;
  }

  public hideRestoDetaiPage(e): void {
    console.log('event====>', e)
    this.showDetailPage = false;
  }

}
