import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HinosFirebaseProvider } from './../../providers/hinos-firebase/hinos-firebase';

@IonicPage()
@Component({
  selector: 'page-hinario',
  templateUrl: 'hinario.html',
})
export class HinarioPage {
  hinos: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: HinosFirebaseProvider) {
    this.hinos = this.provider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HinarioPage');
  }

}
