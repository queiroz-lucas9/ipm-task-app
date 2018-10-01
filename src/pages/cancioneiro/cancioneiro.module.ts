import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancioneiroPage } from './cancioneiro';

@NgModule({
  declarations: [
    CancioneiroPage,
  ],
  imports: [
    IonicPageModule.forChild(CancioneiroPage),
  ],
})
export class CancioneiroPageModule {}
