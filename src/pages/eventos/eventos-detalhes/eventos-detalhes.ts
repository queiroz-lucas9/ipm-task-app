import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  PopoverController
} from 'ionic-angular';
import { Evento } from '../../../model/evento.model';
import { PopoverComponent } from '../../../components/popover/popover';
import { Calendar } from '@ionic-native/calendar';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-eventos-detalhes',
  templateUrl: 'eventos-detalhes.html',
})
export class EventosDetalhesPage {
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

  public evento: Evento;
  start:string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    private calendar: Calendar,
    private launchNavigator: LaunchNavigator,
    public toastCtrl: ToastController
  ) {
    this.evento = this.navParams.get('eventoSelecionado');
    this.start = "";
  }

  ionViewDidLoad() {}

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(PopoverComponent, {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });
    popover.present({
      ev: ev
    });
  }

  addEvent(titulo: string, localizacao: string, descricao: string, data: Date) {
    if (this.calendar.hasReadWritePermission()){
      this.calendar.createEventInteractively(titulo, localizacao, descricao, data, data).then(res => {
        const toast = this.toastCtrl.create({
          message: 'Evento ' + titulo + ' adicionado ao calendário!',
          duration: 3000
        });
        toast.present();
        //this.showBut = false;
      }, err => {
        console.log('err: ', err);
        const toast = this.toastCtrl.create({
          message: err,
          duration: 3000
        });
        toast.present();
      });
    } else{
      this.calendar.requestReadWritePermission();
      const toast = this.toastCtrl.create({
        message: 'Erro de permissão no calendário',
        duration: 3000
      });
      toast.present();
    }
  }

  startNavigation(localizacao: string){
    let options: LaunchNavigatorOptions = {
      start: this.start
    };

    this.launchNavigator.navigate(localizacao, options);
  }

}
