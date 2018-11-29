import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

import { AngularFirestore, CollectionReference, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Calendar } from '@ionic-native/calendar';
import { ToastController } from 'ionic-angular';

import { Evento } from '../../model/evento.model';

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

  showBut: boolean = false;
  dataIni : Date;
  dataFim : Date;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFirestore,
    private _loadingCtrl: LoadingController,
    private calendar: Calendar,
    public toastCtrl: ToastController
  ) { }

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

  addEvent(titulo: string, localizacao: string, descricao: string, data: Date) {

    //this.dataIni = data;
    //this.dataFim = data.setHours(+3);

    /*const toast = this.toastCtrl.create({
      message: data.toString() + '' + data.setHours(3),
      duration: 3000
    });
    toast.present();*/

    if (this.calendar.hasReadWritePermission()){
      this.calendar.createEvent(titulo, localizacao, descricao, data, data).then(res => {
        const toast = this.toastCtrl.create({
          message: 'Evento ' + titulo + ' adicionado ao calendário!',
          duration: 3000
        });
        toast.present();
      }, err => {
        console.log('err: ', err);
        const toast = this.toastCtrl.create({
          message: err,
          duration: 3000
        });
        toast.present();
      });
    } else{
      this.calendar.requestReadWritePermission();
      const toast = this.toastCtrl.create({
        message: 'Erro de permissão no calendário',
        duration: 3000
      });
      toast.present();
    }
  }

}
