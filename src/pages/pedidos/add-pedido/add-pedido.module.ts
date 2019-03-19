import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPedidoPage } from './add-pedido';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPedidoPage),
    FormsModule,
  ],
})
export class AddPedidoPageModule {}
