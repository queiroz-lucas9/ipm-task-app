import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from 'ionic-angular';

import { Cantico } from '../../models/cantico.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  CollectionReference
} from 'angularfire2/firestore';

@IonicPage()
@Component({
  selector: 'page-cancioneiro',
  templateUrl: 'cancioneiro.html',
})
export class CancioneiroPage {

  canticosCollecion: AngularFirestoreCollection<Cantico>;
  canticos: Observable<Cantico[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFirestore,
    private _loadingCtrl: LoadingController,

  ) { }

  ionViewWillEnter() {
    let loading = this._loadingCtrl.create({
      content: 'Carregando Cânticos...'
    });
    loading.present();

    this.canticosCollecion = this.db.collection<Cantico>('/canticos',
      (ref: CollectionReference) => ref
        .orderBy('numero', 'asc')
        .orderBy('titulo', 'asc'));

    this.canticos = this.canticosCollecion.valueChanges()
    loading.dismiss();
  }

}
