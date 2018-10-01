import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BoletimPage } from '../pages/boletim/boletim';
import { BibliaPage } from '../pages/biblia/biblia';
import { HinarioPage } from '../pages/hinario/hinario';
import { CancioneiroPage } from '../pages/cancioneiro/cancioneiro';
import { EventosPage } from '../pages/eventos/eventos';
import { PedidosPage } from '../pages/pedidos/pedidos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BoletimPage,
    BibliaPage,
    HinarioPage,
    CancioneiroPage,
    EventosPage,
    PedidosPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BoletimPage,
    BibliaPage,
    HinarioPage,
    CancioneiroPage,
    EventosPage,
    PedidosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
