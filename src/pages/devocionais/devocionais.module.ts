import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevocionaisPage } from './devocionais';
import { GoogleCardLayout1Module } from '../../components/list-view/google-card/layout-1/google-card-layout-1.module';


@NgModule({
  declarations: [
    DevocionaisPage,
  ],
  imports: [
    IonicPageModule.forChild(DevocionaisPage),
    GoogleCardLayout1Module 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DevocionaisPageModule {}
