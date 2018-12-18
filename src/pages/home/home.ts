import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TabPage1 } from '../tab-page-1/tab-page-1';
import { TabPage2 } from '../tab-page-2/tab-page-2';
import { TabPage3 } from '../tab-page-3/tab-page-3';

@IonicPage()
@Component({
  selector: 'page-home',
  //templateUrl: 'home.html',
  template: `
  <ion-tabs>
  <ion-tab tabIcon="water" tabTitle="A IPM" [root]="tab1"></ion-tab>
  <ion-tab tabIcon="leaf" tabTitle="História" [root]="tab2"></ion-tab>
  <ion-tab tabIcon="flame" tabTitle="Conselho" [root]="tab3"></ion-tab>
  </ion-tabs>`
})
export class HomePage {

  tab1: any;
  tab2: any;
  tab3: any;

  constructor(public navCtrl: NavController) {
    this.tab1 = TabPage1;
    this.tab2 = TabPage2;
    this.tab3 = TabPage3;
  }

}
