import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-hinario',
  templateUrl: 'hinario.html',
})

export class HinarioPage {
  hinos: Observable<Hino[]>;
  hinosCollecion: AngularFirestoreCollection<Hino>;


  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private db: AngularFirestore
  ) { }

  ionViewWillEnter() {
    this.hinosCollecion = this.db.collection<Hino>('/hinos',
    (ref: CollectionReference) => ref
      .orderBy('numero', 'asc')
      .orderBy('titulo', 'asc'));

    this.hinos = this.hinosCollecion.valueChanges();
  }
}