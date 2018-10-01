import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BibliaPage } from './biblia';

@NgModule({
  declarations: [
    BibliaPage,
  ],
  imports: [
    IonicPageModule.forChild(BibliaPage),
  ],
})
export class BibliaPageModule {}
