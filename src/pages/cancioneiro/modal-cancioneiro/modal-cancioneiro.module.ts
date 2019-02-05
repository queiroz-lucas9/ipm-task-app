import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCancioneiroPage } from './modal-cancioneiro';
import {PipesModule} from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    ModalCancioneiroPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCancioneiroPage),
    PipesModule
  ],
  exports: [
    ModalCancioneiroPage,
  ],
})
export class ModalCancioneiroPageModule {}
