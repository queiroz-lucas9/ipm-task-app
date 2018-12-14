import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
  params: any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params.data = {
      "duration": 10000,
      "backgroundImage": '../assets/images/splashscreen/bg3.jpg',
      "logo": '../assets/images/logo/LOGO_IPM.png',
      "title": "Igreja Presbiteriana de Mauá"
    };
  }

  ionViewDidLoad(){
    setTimeout(() => this.navCtrl.setRoot(HomePage), 5000);
  }

}
