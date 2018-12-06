import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SobrePage } from './sobre';
import { MapsLayout2Module } from '../../components/maps/layout-2/maps-layout-2.module';

@NgModule({
  declarations: [
    SobrePage,
  ],
  imports: [
    IonicPageModule.forChild(SobrePage),
    MapsLayout2Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SobrePageModule {}
