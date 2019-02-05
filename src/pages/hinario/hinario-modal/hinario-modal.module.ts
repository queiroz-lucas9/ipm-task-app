import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HinarioModalPage } from './hinario-modal';
import {PipesModule} from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    HinarioModalPage
  ],
  imports: [
    IonicPageModule.forChild(HinarioModalPage),
    PipesModule
  ],
  exports: [
    HinarioModalPage
  ],
})
export class ModalHinoPageModule {}
