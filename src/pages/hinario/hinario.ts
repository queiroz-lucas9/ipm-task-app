import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from 'ionic-angular';

import { Hino } from '../../models/hino.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  CollectionReference
} from 'angularfire2/firestore';

import { ModalController } from 'ionic-angular';
import { ModalHinoPage } from '../hinario/modal-hino/modal-hino';



@IonicPage()
@Component({
  selector: 'page-hinario',
  templateUrl: 'hinario.html',
})
export class HinarioPage {
  hinosCollecion: AngularFirestoreCollection<Hino>;
  hinos: Observable<Hino[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFirestore,
    private _loadingCtrl: LoadingController,
    public modalCtrl: ModalController
  ) {
   }

  ionViewWillEnter() {
    let loading = this._loadingCtrl.create({
      content: 'Carregando Hinos...'
    });
    loading.present();

    this.hinosCollecion = this.db.collection<Hino>('/hinos',
      (ref: CollectionReference) => ref
        .orderBy('numero', 'asc')
        .orderBy('titulo', 'asc'));

    this.hinos = this.hinosCollecion.valueChanges();
    loading.dismiss();
  }

  getItems(searchbar) {
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;
  
    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }

    console.log(q);

    if(parseInt(q))
    {
      this.hinosCollecion = this.db.collection<Hino>('/hinos', ref => {
        // Compose a query using multiple .where() methods
        return ref
                //.where('numero', '==', q)
                .orderBy('numero')
                .startAt(q).endAt(q +'\uf8ff')
      });
      this.hinos = this.hinosCollecion.valueChanges();
    }
    else {
      this.hinosCollecion = this.db.collection<Hino>('/hinos', ref => {
        // Compose a query using multiple .where() methods
        return ref
                .orderBy('titulo')
                .startAt(q).endAt(q +'\uf8ff')
      });
      this.hinos = this.hinosCollecion.valueChanges();
    }
  }

  presentModal() {
    let myModal = this.modalCtrl.create(ModalHinoPage);
    myModal.present();
  }  
}