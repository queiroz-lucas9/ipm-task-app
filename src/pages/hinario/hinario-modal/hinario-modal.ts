import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  PopoverController
} from 'ionic-angular';

import { Hino } from '../../../model/hino.model';
import { PopoverComponent } from '../../../components/popover/popover';

@IonicPage()
@Component({
  selector: 'page-hinario-modal',
  templateUrl: 'hinario-modal.html',
})
export class HinarioModalPage {
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

  public hino: Hino;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController
  ) {
    this.hino = this.navParams.get('hinoSelecionado');
  }

  ionViewDidLoad() { }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(PopoverComponent, {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });
    popover.present({
      ev: ev
    });
  }
}
