import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { PopoverComponent } from '../components/popover/popover';
import { LoadingService } from '../services/loading-service'
import { ToastService } from '../services/toast-service';
import { environment } from '../environments/environment';

import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from '../../node_modules/angularfire2/firestore';
import { Calendar } from '@ionic-native/calendar';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { HomePage } from '../pages/home/home';
import {TabPage1} from '../pages/tab-page-1/tab-page-1';
import {TabPage2} from '../pages/tab-page-2/tab-page-2';
import {TabPage3} from '../pages/tab-page-3/tab-page-3';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PopoverComponent,
    TabPage1,
    TabPage2,
    TabPage3,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PopoverComponent,
    TabPage1,
    TabPage2,
    TabPage3,
  ],
  providers: [
    StatusBar,
    //SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PopoverComponent,
    Calendar,
    LaunchNavigator,
    LoadingService,
    ToastService
  ]
})
export class AppModule { }
