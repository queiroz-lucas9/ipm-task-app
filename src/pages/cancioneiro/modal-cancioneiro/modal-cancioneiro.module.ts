import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCancioneiroPage } from './modal-cancioneiro';

@NgModule({
  declarations: [
    ModalCancioneiroPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCancioneiroPage),
  ],
  exports: [
    ModalCancioneiroPage,
  ],
})
export class ModalCancioneiroPageModule {}
