import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Pedido } from '../../../model/pedido.model';
import { Observable } from 'rxjs/Observable';

import { PedidosPage } from '../pedidos';


@IonicPage()
@Component({
  selector: 'page-add-pedido',
  templateUrl: 'add-pedido.html',
})
export class AddPedidoPage {

  pedidosCollection: AngularFirestoreCollection<Pedido>;
  pedidos$: Observable<Pedido[]>;
  tipo: string = "";
  autor: string = "";
  descricao: string = "";

  private isNameValid: boolean = true;
  private isTextValid: boolean = true;
  private isTypeValid: boolean = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private db: AngularFirestore, 
    private _loadingCtrl: LoadingController, 
    public toastCtrl: ToastController) {
  }

  gravaPedido() {

    if (this.validaCampos()) {
      const id = this.db.createId();

      this.pedidosCollection = this.db.collection<Pedido>('/pedidos');
      this.pedidosCollection.add({ 
        autor: this.autor, 
        descricao: this.descricao, 
        tipo: this.tipo, 
        uid: id, 
        data: new Date(), 
        validado: false });

      const toast = this.toastCtrl.create({
        message: 'Pedido de oração foi adicionado. Após a efetivação da aprovação ele será exibido na lista de pedidos.',
        duration: 5000
      });
      toast.present();

      this.navCtrl.setRoot(PedidosPage.name);
    }

  }

  validaCampos() {
    this.isNameValid = true;
    this.isTextValid = true;
    this.isTypeValid = true;

    if (!this.isNameValid || this.autor.length == 0) {
      this.isNameValid = false;
    }

    if (!this.isTextValid || this.descricao.length == 0) {
      this.isTextValid = false;
    }

    if (!this.isTypeValid || this.tipo.length == 0) {
      this.isTypeValid = false;
    }

    return this.isNameValid && this.isTextValid && this.isTypeValid;
  }

}
