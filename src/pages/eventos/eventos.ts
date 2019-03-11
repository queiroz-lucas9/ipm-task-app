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

  eventosDezCollection: AngularFirestoreCollection<Evento>;
  eventosDez$: Observable<Evento[]>;

  eventosJanCollection: AngularFirestoreCollection<Evento>;
  eventosJan$: Observable<Evento[]>;

  eventosFevCollection: AngularFirestoreCollection<Evento>;
  eventosFev$: Observable<Evento[]>;

  eventosMarCollection: AngularFirestoreCollection<Evento>;
  eventosMar$: Observable<Evento[]>;

  eventosAbrCollection: AngularFirestoreCollection<Evento>;
  eventosAbr$: Observable<Evento[]>;

  eventosMaiCollection: AngularFirestoreCollection<Evento>;
  eventosMai$: Observable<Evento[]>;

  eventosJunCollection: AngularFirestoreCollection<Evento>;
  eventosJun$: Observable<Evento[]>;

  eventosJulCollection: AngularFirestoreCollection<Evento>;
  eventosJul$: Observable<Evento[]>;

  eventosAgoCollection: AngularFirestoreCollection<Evento>;
  eventosAgo$: Observable<Evento[]>;

  eventosSetCollection: AngularFirestoreCollection<Evento>;
  eventosSet$: Observable<Evento[]>;

  eventosOutCollection: AngularFirestoreCollection<Evento>;
  eventosOut$: Observable<Evento[]>;

  eventosNovCollection: AngularFirestoreCollection<Evento>;
  eventosNov$: Observable<Evento[]>;

  dataIni: Date;
  dataFim: Date;
  animateClass: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFirestore,
    private _loadingCtrl: LoadingController,
  ) {
    this.animateClass = { 'fade-in-right-item': true };
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

    this.eventosCollection = this.db.collection<Evento>('/eventos',
      (ref: CollectionReference) => ref
        .orderBy('data', 'asc')
        .orderBy('titulo', 'asc'));

    this.eventos$ = this.eventosCollection.valueChanges();
    this.eventos$.pipe(take(1))
      .subscribe(() => { loading.dismiss() });

    this.getDezEventos();
    this.getJanEventos();
    this.getFevEventos();
    this.getMarEventos();
    this.getAbrEventos();
    this.getMaiEventos();
    this.getJunEventos();
    this.getJulEventos();
    this.getAgoEventos();
    this.getSetEventos();
    this.getOutEventos();
    this.getNovEventos();
  }

  getDezEventos() {
    let start = new Date('2018-12-01');
    let end = new Date('2018-12-31');

    this.eventosDezCollection = this.db.collection<Evento>('/eventos',
      (ref: CollectionReference) => ref
        .where('data', '>=', start).where('data', '<=', end)
        .orderBy('data', 'asc')
        .orderBy('titulo', 'asc'));

    this.eventosDez$ = this.eventosDezCollection.valueChanges();
    this.eventosDez$.pipe(take(1));
  }

  getJanEventos() {
    let start = new Date('2019-01-01');
    let end = new Date('2019-01-31');

    this.eventosJanCollection = this.db.collection<Evento>('/eventos',
      (ref: CollectionReference) => ref
        .where('data', '>=', start).where('data', '<=', end)
        .orderBy('data', 'asc')
        .orderBy('titulo', 'asc'));

    this.eventosJan$ = this.eventosJanCollection.valueChanges();
    this.eventosJan$.pipe(take(1));
  }

  getFevEventos() {
    let start = new Date('2019-02-01');
    let end = new Date('2019-02-28');

    this.eventosFevCollection = this.db.collection<Evento>('/eventos',
      (ref: CollectionReference) => ref
        .where('data', '>=', start).where('data', '<=', end)
        .orderBy('data', 'asc')
        .orderBy('titulo', 'asc'));

    this.eventosFev$ = this.eventosFevCollection.valueChanges();
    this.eventosFev$.pipe(take(1));
  }

  getMarEventos() {
    let start = new Date('2019-03-01');
    let end = new Date('2019-03-31');

    this.eventosMarCollection = this.db.collection<Evento>('/eventos',
      (ref: CollectionReference) => ref
        .where('data', '>=', start).where('data', '<=', end)
        .orderBy('data', 'asc')
        .orderBy('titulo', 'asc'));

    this.eventosMar$ = this.eventosMarCollection.valueChanges();
    this.eventosMar$.pipe(take(1));
  }

  getAbrEventos() {
    let start = new Date('2019-04-01');
    let end = new Date('2019-04-30');

    this.eventosAbrCollection = this.db.collection<Evento>('/eventos',
      (ref: CollectionReference) => ref
        .where('data', '>=', start).where('data', '<=', end)
        .orderBy('data', 'asc')
        .orderBy('titulo', 'asc'));

    this.eventosAbr$ = this.eventosAbrCollection.valueChanges();
    this.eventosAbr$.pipe(take(1));
  }

  getMaiEventos() {
    let start = new Date('2019-05-01');
    let end = new Date('2019-05-31');

    this.eventosMaiCollection = this.db.collection<Evento>('/eventos',
      (ref: CollectionReference) => ref
        .where('data', '>=', start).where('data', '<=', end)
        .orderBy('data', 'asc')
        .orderBy('titulo', 'asc'));

    this.eventosMai$ = this.eventosMaiCollection.valueChanges();
    this.eventosMai$.pipe(take(1));
  }

  getJunEventos() {
    let start = new Date('2019-06-01');
    let end = new Date('2019-06-30');

    this.eventosJunCollection = this.db.collection<Evento>('/eventos',
      (ref: CollectionReference) => ref
        .where('data', '>=', start).where('data', '<=', end)
        .orderBy('data', 'asc')
        .orderBy('titulo', 'asc'));

    this.eventosJun$ = this.eventosJunCollection.valueChanges();
    this.eventosJun$.pipe(take(1));
  }

  getJulEventos() {
    let start = new Date('2019-07-01');
    let end = new Date('2019-07-31');

    this.eventosJulCollection = this.db.collection<Evento>('/eventos',
      (ref: CollectionReference) => ref
        .where('data', '>=', start).where('data', '<=', end)
        .orderBy('data', 'asc')
        .orderBy('titulo', 'asc'));

    this.eventosJul$ = this.eventosJulCollection.valueChanges();
    this.eventosJul$.pipe(take(1));
  }

  getAgoEventos() {
    let start = new Date('2019-08-01');
    let end = new Date('2019-08-31');

    this.eventosAgoCollection = this.db.collection<Evento>('/eventos',
      (ref: CollectionReference) => ref
        .where('data', '>=', start).where('data', '<=', end)
        .orderBy('data', 'asc')
        .orderBy('titulo', 'asc'));

    this.eventosAgo$ = this.eventosAgoCollection.valueChanges();
    this.eventosAgo$.pipe(take(1));
  }

  getSetEventos() {
    let start = new Date('2019-09-01');
    let end = new Date('2019-09-30');

    this.eventosSetCollection = this.db.collection<Evento>('/eventos',
      (ref: CollectionReference) => ref
        .where('data', '>=', start).where('data', '<=', end)
        .orderBy('data', 'asc')
        .orderBy('titulo', 'asc'));

    this.eventosSet$ = this.eventosSetCollection.valueChanges();
    this.eventosSet$.pipe(take(1));
  }

  getOutEventos() {
    let start = new Date('2019-10-01');
    let end = new Date('2019-10-31');

    this.eventosOutCollection = this.db.collection<Evento>('/eventos',
      (ref: CollectionReference) => ref
        .where('data', '>=', start).where('data', '<=', end)
        .orderBy('data', 'asc')
        .orderBy('titulo', 'asc'));

    this.eventosOut$ = this.eventosOutCollection.valueChanges();
    this.eventosOut$.pipe(take(1));
  }

  getNovEventos() {
    let start = new Date('2019-11-01');
    let end = new Date('2019-11-30');

    this.eventosNovCollection = this.db.collection<Evento>('/eventos',
      (ref: CollectionReference) => ref
        .where('data', '>=', start).where('data', '<=', end)
        .orderBy('data', 'asc')
        .orderBy('titulo', 'asc'));

    this.eventosNov$ = this.eventosNovCollection.valueChanges();
    this.eventosNov$.pipe(take(1));
  }

  presentModal(evento: Evento) {
    this.navCtrl.push(EventosDetalhesPage.name, {
      eventoSelecionado: evento
    });
  }
}
