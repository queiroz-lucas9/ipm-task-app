import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  PopoverController
} from 'ionic-angular';
import { PopoverComponent } from '../../../components/popover/popover';
import { Cantico } from '../model/cantico.model';


@IonicPage()
@Component({
  selector: 'page-modal-cancioneiro',
  templateUrl: 'modal-cancioneiro.html',
})
export class ModalCancioneiroPage {

  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

  public cantico: Cantico;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController
  ) {
    this.cantico = this.navParams.get('canticoSelecionado');
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
