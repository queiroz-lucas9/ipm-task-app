import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HinarioPage } from './hinario';



@NgModule({
  declarations: [
    HinarioPage
  ],
  imports: [
    IonicPageModule.forChild(HinarioPage)
  ],
  exports: [
    HinarioPage
  ],
  providers: [

  ]
})
export class HinarioPageModule { }
