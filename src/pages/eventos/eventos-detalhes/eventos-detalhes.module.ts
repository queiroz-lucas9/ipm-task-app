import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventosDetalhesPage } from './eventos-detalhes';

@NgModule({
  declarations: [
    EventosDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(EventosDetalhesPage),
  ],
})
export class EventosDetalhesPageModule {}
