import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoinPriceService } from '../../services/coinprice'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  private data: any;

  constructor(public navCtrl: NavController, private priceSvc: CoinPriceService) {
    this.priceSvc.getCoinData().subscribe(data => this.data = data);
  }

}
