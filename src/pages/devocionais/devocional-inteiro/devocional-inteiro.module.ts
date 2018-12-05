import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevocionalInteiroPage } from './devocional-inteiro';
import {ParallaxLayout4Module} from '../../../components/parallax/layout-4/parallax-layout-4.module';

@NgModule({
  declarations: [
    DevocionalInteiroPage,
  ],
  imports: [
    IonicPageModule.forChild(DevocionalInteiroPage),
    ParallaxLayout4Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DevocionalInteiroPageModule {}
