import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';
/**
 * Generated class for the BibliaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-biblia',
  templateUrl: 'biblia.html',
})
export class BibliaPage {

  public xmlItems : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http   : HttpClient) {
  }

  ionViewWillEnter()
   {
      this.loadXML();
   }

   loadXML()
   {
      this.http.get('/assets/data/Almeida Revista e Atualizada.xml',
      {
        headers: new HttpHeaders()
        .set('Content-Type', 'text/xml')
        .append('Access-Control-Allow-Methods', 'GET')
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
        responseType:'text'
      })
      .subscribe((data)=>
      {
         this.parseXML(data)
         .then((data)=>
         {
            this.xmlItems = data;
         });
      });
   }

   parseXML(data)
   {
      return new Promise(resolve =>
      {
         var k,
             arr    = [],
             parser = new xml2js.Parser(
             {
                trim: true,
                explicitArray: true
             });

         parser.parseString(data, function (err, result)
         {
            var obj = result.bible;
            for(k in obj.b)
            {
               var item = obj.b[k];
               arr.push({
                  livro           : item.livro[0],
                  versiculo        : item.c[0]
               });
            }

            resolve(arr);
         });
      });
   }

}
