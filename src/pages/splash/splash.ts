import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
  params: any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params.data = {
      "duration": 5000,
      "backgroundImage": '../assets/images/splashscreen/bg3.jpg',
      "logo": '../assets/images/logo/LOGO_IPM.png',
      "title": "Igreja Presbiteriana de Mauá"
    };
  }

  ionViewDidLoad(){
    setTimeout(() => this.navCtrl.setRoot(HomePage), 3000);
  }

}
