import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

import { AngularFirestore, CollectionReference, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Evento } from '../../model/evento.model';
import { EventosDetalhesPage } from './eventos-detalhes/eventos-detalhes';

import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';



@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  eventosCollection: AngularFirestoreCollection<Evento>;
  eventos$: Observable<Evento[]>;

  dataIni : Date;
  dataFim : Date;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFirestore,
    private _loadingCtrl: LoadingController,
  ) {}

  ionViewDidEnter() {
    this.getAllEventos();
  }

  getAllEventos(){
    let loading = this._loadingCtrl
      .create({
        content: 'Carregando Eventos...'
      });

    if (!this.eventos$) {
      loading.present();
    }

    this.eventosCollection = this.db.collection<Evento>('/eventos',
      (ref: CollectionReference) => ref
        .orderBy('data', 'asc')
        .orderBy('titulo', 'asc'));

    this.eventos$ = this.eventosCollection.valueChanges();
    this.eventos$.pipe(take(1))
      .subscribe(() => { loading.dismiss() });
  }

  presentModal(evento: Evento) {
    this.navCtrl.push(EventosDetalhesPage.name, {
      eventoSelecionado: evento
    });
  }
}
