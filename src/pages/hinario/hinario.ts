import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

import { AngularFirestore, CollectionReference, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Hino } from '../../model/hino.model';
import { HinarioModalPage } from './hinario-modal/hinario-modal';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-hinario',
  templateUrl: 'hinario.html',
})
export class HinarioPage {

  hinosCollection: AngularFirestoreCollection<Hino>;
  hinos$: Observable<Hino[]>;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFirestore,
    private _loadingCtrl: LoadingController,

  ) { this.getAllHinos(); }

  search(event) {
    var q = event.target.value.toString().toLowerCase();

    if (!isNaN(q)) {
      var texto = 'numero';
    } else {
      texto = 'titulo_lowercase';
    }

    if (q != '') {
      this.hinosCollection = this.db.collection<Hino>('/hinos',
        (ref: CollectionReference) => ref
          .orderBy(texto, 'asc')
          .startAt(q)
          .endAt(q + '\uf8ff')
      );
      this.hinos$ = this.hinosCollection.valueChanges();
      console.log(q);
    } else {
      this.getAllHinos();
    }
  }

  getAllHinos() {
    let loading = this._loadingCtrl
      .create({
        content: 'Carregando Hinos...'
      });

    if (!this.hinos$) {
      loading.present();
    }

    this.hinosCollection = this.db.collection<Hino>('/hinos',
      (ref: CollectionReference) => ref
        .orderBy('indice', 'asc')
        .orderBy('titulo', 'asc'));

    this.hinos$ = this.hinosCollection.valueChanges();
    this.hinos$.pipe(take(1))
      .subscribe(() => { loading.dismiss() });
  }

  presentModal(hino: Hino) {
    this.navCtrl.push(HinarioModalPage.name, {
      hinoSelecionado: hino
    });
  }
}
