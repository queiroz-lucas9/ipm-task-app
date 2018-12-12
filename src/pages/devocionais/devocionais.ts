import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

import { Devocional } from '../../model/devocional.model';

import {DevocionalInteiroPage} from './devocional-inteiro/devocional-inteiro';

import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';
import { AngularFirestore, CollectionReference, AngularFirestoreCollection } from '@angular/fire/firestore';


@IonicPage()
@Component({
  selector: 'page-devocionais',
  templateUrl: 'devocionais.html',
})
export class DevocionaisPage {

  devocionaisCollection: AngularFirestoreCollection<Devocional>;
  devocionais$: Observable<Devocional[]>;
  active: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFirestore,
    private _loadingCtrl: LoadingController
  ) {}

  ionViewDidEnter() {
    this.getAllDevocionais();
  }

  isClassActive() {
    return this.active;
  }

  getAllDevocionais(){
    let loading = this._loadingCtrl
      .create({
        content: 'Carregando Devocionais...'
      });

    if (!this.devocionais$) {
      loading.present();
    }

    this.devocionaisCollection = this.db.collection<Devocional>('/devocionais',
      (ref: CollectionReference) => ref
        .orderBy('data', 'desc')
        .orderBy('titulo', 'asc'));

    this.devocionais$ = this.devocionaisCollection.valueChanges();
    this.devocionais$.pipe(take(1))
      .subscribe(() => { loading.dismiss() });
  }


  presentModal(devocional: Devocional) {
    this.navCtrl.push(DevocionalInteiroPage.name, {
      devocionalSelecionado: devocional
    });
  }


}
