import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

import { AddPedidoPage } from './add-pedido/add-pedido'

import { AngularFirestore, CollectionReference, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Pedido } from '../../model/pedido.model';
import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {

  pedidosCollection: AngularFirestoreCollection<Pedido>;
  pedidos$: Observable<Pedido[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFirestore,
    private _loadingCtrl: LoadingController) {
    this.getAllPedidos();
  }

  getAllPedidos() {
    let loading = this._loadingCtrl
      .create({
        content: 'Carregando Pedidos...'
      });

    if (!this.pedidos$) {
      loading.present();
    }

    this.pedidosCollection = this.db.collection<Pedido>('/pedidos',
      (ref: CollectionReference) => ref
        .where('validado', '==', true)
        .orderBy('data', 'desc'));

    this.pedidos$ = this.pedidosCollection.valueChanges();
    this.pedidos$.pipe(take(1))
      .subscribe(() => { loading.dismiss() });
  }

  adicionar() {
    this.navCtrl.push(AddPedidoPage.name);
  }
}
  