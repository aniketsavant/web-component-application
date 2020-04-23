import { Component } from '@angular/core';
import { Restaurant2 } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'combine-web-component';
  public restDetail: Restaurant2;
  public showDetailPage: boolean = false;
  constructor( ) {

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
