import { Component } from '@angular/core';
import { take } from 'rxjs/operators/take';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController
} from 'ionic-angular';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  CollectionReference
} from 'angularfire2/firestore';
import { FirebaseError } from 'firebase';

import { ModalHinoPage } from '../hinario/modal-hino/modal-hino';
import { Hino } from '../../models/hino.model';

@IonicPage()
@Component({
  selector: 'page-hinario',
  templateUrl: 'hinario.html',
})
export class HinarioPage {

  hinosCollecion: AngularFirestoreCollection<Hino>;
  hinos$: Observable<Hino[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFirestore,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
  ) { }

  ionViewWillEnter(){

    let loading = this._loadingCtrl.create({
      content: 'Carregando Hinos...'
    });
    loading.present();

    this.hinosCollecion = this.db.collection<Hino>('/hinos',
      (ref: CollectionReference) => ref
        .orderBy('numero', 'asc')
        .orderBy('titulo', 'asc'));

    this.hinos$ = this.hinosCollecion.valueChanges();
    this.hinos$
      .pipe(take(1))
      .subscribe(() => {
        loading.dismiss()
      },
        (err: FirebaseError) => {
          loading.dismiss();
          this._alertCtrl.create({
            title: 'Falha na conexão :(',
            subTitle: 'Não possivel carregar a lista de hinos. Tente novamente mais tarde!',
            buttons: [
              { text: 'Ok' }
            ]
          }).present();
        }
      );
  }

  getItems(searchbar) {
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;

    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }

    console.log(q);

    if (parseInt(q)) {
      this.hinosCollecion = this.db.collection<Hino>('/hinos', ref => {
        // Compose a query using multiple .where() methods
        return ref
          //.where('numero', '==', q)
          .orderBy('numero', 'asc')
          .startAt(q).endAt(q + '\uf8ff')
      });
      this.hinos$ = this.hinosCollecion.valueChanges();
    }
    else {
      this.hinosCollecion = this.db.collection<Hino>('/hinos', ref => {
        // Compose a query using multiple .where() methods
        return ref
          .orderBy('titulo', 'asc')
          .startAt(q).endAt(q + '\uf8ff')
      });
      this.hinos$ = this.hinosCollecion.valueChanges();
    }

  }

  presentModal(hino: Hino) {
    this.navCtrl.push(ModalHinoPage.name, {
      hinoSelecionado: hino
    });
  }
}
