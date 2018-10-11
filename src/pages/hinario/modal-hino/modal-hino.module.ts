import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalHinoPage } from './modal-hino';

@NgModule({
  declarations: [
    ModalHinoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalHinoPage),
  ],
  exports: [
    ModalHinoPage,
  ],
})
export class ModalHinoPageModule {}
