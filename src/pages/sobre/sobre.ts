import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {

  params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params.data = {
      "contentDescription" : "Esta igreja crê na Bíblia, está empenhada em viver os seus ensinos e a proclamar as verdades da Palavra de Deus!",
      "contentDescription1" : "Sola Scriptura – Solus Christus – Sola Gratia – Sola Fide – Soli Deo Gloria",
      "contentTitle" : "Venha nos fazer uma visita! Ficaremos honrados com sua presença.",
      "email" : "revcid@gmail.com",
      "icon" : "checkmark-circle",
      "location" : "R Almirante Tamandaré, 65 - Vila Bocaina",
      "map" : {
        "lat" : -23.666742,
        "lng" : -46.452691,
        "mapTypeControl" : true,
        "streetViewControl" : true,
        "zoom" : 15
      },
      "phone" : "(11) 4543-0282",
      "time" : "Domingos as 09:00 e as 19:00",
      "time1" : "Quintas as 19:30",
      "titleDescription" : "Venha nos fazer uma visita! Ficaremos honrados com sua presença.",
      "titleMap" : "Veja no mapa nossa localização:",
      "webSite" : "www.ipmaua.org"
  }
  this.params.events = {
    'onRates': function (index: number) {
       console.log("Rates");
  }

}
  }
}
