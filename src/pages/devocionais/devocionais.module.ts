import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevocionaisPage } from './devocionais';
import { GoogleCardLayout2Module } from '../../components/list-view/google-card/layout-2/google-card-layout-2.module';



@NgModule({
  declarations: [
    DevocionaisPage,
  ],
  imports: [
    IonicPageModule.forChild(DevocionaisPage),
    GoogleCardLayout2Module 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DevocionaisPageModule {}
