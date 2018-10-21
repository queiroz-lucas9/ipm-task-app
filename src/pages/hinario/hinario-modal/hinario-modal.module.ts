import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HinarioModalPage } from './hinario-modal';

@NgModule({
  declarations: [
    HinarioModalPage
  ],
  imports: [
    IonicPageModule.forChild(HinarioModalPage),
  ],
  exports: [
    HinarioModalPage
  ],
})
export class ModalHinoPageModule {}
