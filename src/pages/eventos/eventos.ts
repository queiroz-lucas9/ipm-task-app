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

  // eventosDezCollection: AngularFirestoreCollection<Evento>;
  // eventosDez$: Observable<Evento[]>;

  // eventosJanCollection: AngularFirestoreCollection<Evento>;
  // eventosJan$: Observable<Evento[]>;


  dataIni: Date;
  dataFim: Date;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFirestore,
    private _loadingCtrl: LoadingController,
  ) {
    this.getAllEventos();
  }

  getAllEventos() {
    let loading = this._loadingCtrl
      .create({
        content: 'Carregando Eventos...'
      });

    if (!this.eventos$) {
      loading.present();
    }

    let start = new Date('2018-12-01');
    let end = new Date('2018-12-31');

    this.eventosCollection = this.db.collection<Evento>('/eventos',
      (ref: CollectionReference) => ref
        //.where('data', '>=', start).where('data','<=',end)
        .orderBy('data', 'asc')
        .orderBy('titulo', 'asc'));

    this.eventos$ = this.eventosCollection.valueChanges();
    this.eventos$.pipe(take(1))
      .subscribe(() => { loading.dismiss() });

    // this.getDezEventos();
    // this.getJanEventos();
  }

  // getDezEventos(){

  //   let start = new Date('2018-12-01');
  //   let end = new Date('2018-12-31');

  //   this.eventosDezCollection = this.db.collection<Evento>('/eventos',
  //     (ref: CollectionReference) => ref
  //       .where('data', '>=', start).where('data','<=',end)
  //       .orderBy('data', 'asc')
  //       .orderBy('titulo', 'asc'));

  //   this.eventosDez$ = this.eventosDezCollection.valueChanges();
  //   this.eventosDez$.pipe(take(1));
  // }

  // getJanEventos(){

  //   let start = new Date('2019-01-01');
  //   let end = new Date('2019-01-31');

  //   this.eventosJanCollection = this.db.collection<Evento>('/eventos',
  //     (ref: CollectionReference) => ref
  //       .where('data', '>=', start).where('data','<=',end)
  //       .orderBy('data', 'asc')
  //       .orderBy('titulo', 'asc'));

  //   this.eventosJan$ = this.eventosJanCollection.valueChanges();
  //   this.eventosJan$.pipe(take(1));
  // }

  presentModal(evento: Evento) {
    this.navCtrl.push(EventosDetalhesPage.name, {
      eventoSelecionado: evento
    });
  }
}
