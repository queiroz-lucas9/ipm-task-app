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

import { ModalCancioneiroPage } from './modal-cancioneiro/modal-cancioneiro';
import { Cantico } from '../../models/cantico.model';

@IonicPage()
@Component({
  selector: 'page-cancioneiro',
  templateUrl: 'cancioneiro.html',
})
export class CancioneiroPage {

  canticosCollecion: AngularFirestoreCollection<Cantico>;
  canticos$: Observable<Cantico[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFirestore,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController
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

    this.canticos$ = this.canticosCollecion.valueChanges();
    this.canticos$
      .pipe(take(1))
      .subscribe(() => {
        loading.dismiss()
      },
        (err: FirebaseError) => {
          loading.dismiss();
          this._alertCtrl.create({
            title: 'Falha na conexão :(',
            subTitle: 'Não possivel carregar a lista de canticos. Tente novamente mais tarde!',
            buttons: [
              { text: 'Ok' }
            ]
          }).present();
        }
      );
  }

  presentModal(cantico: Cantico) {
    this.navCtrl.push(ModalCancioneiroPage.name, {
      canticoSelecionado: cantico
    });
  }
}
