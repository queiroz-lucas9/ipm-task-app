import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Devocional } from '../../../model/devocional.model';


@IonicPage()
@Component({
  selector: 'page-devocional-inteiro',
  templateUrl: 'devocional-inteiro.html',
})
export class DevocionalInteiroPage {
  public devocional : Devocional;

  params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.devocional = this.navParams.get('devocionalSelecionado');

    this.params.data = {
      "avatar" : "assets/images/avatar/22.jpg",
      "category" : "",
      "headerImage" : this.devocional.img,
      "headerTitle" : "Devocionais",
      "items" : [ {
        //texto corrido da devocional
        "subtitle" : this.devocional.descricao,
        //utilizar em caso de destaque inicial
        "title" : this.devocional.destaque
      } ],
      "shareIcon" : "more",
      "subtitle" : this.devocional.autor,
      "title" : this.devocional.titulo
    }

    this.params.events = {
      'onShare': function (item: any) {
          console.log("onShare");
      }
  };
  }

}
