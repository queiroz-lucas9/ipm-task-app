import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

//import { BoletimPage } from '../pages/boletim/boletim';
import { HinarioPage } from '../pages/hinario/hinario';
import { CancioneiroPage } from '../pages/cancioneiro/cancioneiro';
import { EventosPage } from '../pages/eventos/eventos';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { DevocionaisPage } from '../pages/devocionais/devocionais';
import { SobrePage } from '../pages/sobre/sobre';
import { SplashPage } from '../pages/splash/splash';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SplashPage.name;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              //public splashScreen: SplashScreen
              ) {
              this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'ios-home-outline' },
      { title: 'Boletim', component: DevocionaisPage.name, icon: 'ios-book-outline' },
      //{ title: 'Bíblia', component: BibliaPage.name, icon: 'book' },
      { title: 'Hinário', component: HinarioPage.name, icon: 'ios-musical-notes-outline' },
      { title: 'Cancioneiro', component: CancioneiroPage.name, icon: 'ios-musical-note-outline' },
      { title: 'Eventos', component: EventosPage.name, icon: 'ios-calendar-outline' },
      { title: 'Pedidos de oração', component: PedidosPage.name, icon: 'ios-chatbubbles-outline' },
      //{ title: 'Devocionais', component: DevocionaisPage.name, icon: 'book' },
      { title: 'Sobre a IP Mauá', component: SobrePage.name, icon: 'ios-information-circle-outline' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      //this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
