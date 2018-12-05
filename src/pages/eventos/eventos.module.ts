import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventosPage } from './eventos';

@NgModule({
  declarations: [
    EventosPage,
  ],
  imports: [
    IonicPageModule.forChild(EventosPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    EventosPage
  ]
})
export class EventosPageModule {}
