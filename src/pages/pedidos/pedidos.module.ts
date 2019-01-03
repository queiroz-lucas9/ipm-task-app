import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidosPage } from './pedidos';
import { StickyListHeaderLayout3Module } from '../../components/list-view/sticky-list-header/layout-3/sticky-list-header-layout-3.module';

@NgModule({
  declarations: [
    PedidosPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidosPage),
    StickyListHeaderLayout3Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    PedidosPage
  ]
})
export class PedidosPageModule {}
