import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevocionaisPage } from './devocionais';
import {ParallaxLayout1Module} from '../../components/parallax/layout-1/parallax-layout-1.module';


@NgModule({
  declarations: [
    DevocionaisPage,
  ],
  imports: [
    IonicPageModule.forChild(DevocionaisPage),
    ParallaxLayout1Module 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DevocionaisPageModule {}
