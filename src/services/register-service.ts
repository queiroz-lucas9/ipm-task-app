import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class RegisterService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'register';

    getTitle = (): string => 'Register pages';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Register + logo", "theme"  : "layout1"},
          {"title" : "Register + image", "theme"  : "layout2"}
        ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    //Register + logo data
    getDataForLayout1 = (): any => {
      return {
        "toolbarTitle"        : "Register + logo",
        "logo"                : "assets/images/logo/2.png",
        "register"            : "register",
        "title"               : "Register your new account",
        "username"            : "Enter your username",
        "city"                : "Your home town",
        "country"             : "Where are you from?",
        "password"            : "Enter your password",
        "email"               : "Your e-mail address",
        "skip"                : "Skip",
        "lableUsername"       : "USERNAME",
        "lablePassword"       : "PASSWORD",
        "lableEmail"          : "E-MAIL",
        "lableCountry"        : "COUNTRY",
        "lableCity"           : "CITY",
        "errorUser"           : "Field can't be empty.",
        "errorPassword"       : "Field can't be empty.",
        "errorEmail"          : "Invalid email address.",
        "errorCountry"        : "Field can't be empty.",
        "errorCity"           : "Field can't be empty."
      };
    };

    //Register + image data
    getDataForLayout2 = (): any => {
      return {
        "toolbarTitle"        : "Register + image",
        "title"               : "Register",
        "background"          : "assets/images/background/2.jpg",
        "username"            : "Enter your username",
        "city"                : "Your home town",
        "country"             : "Where are you from?",
        "password"            : "Enter your password",
        "email"               : "Your e-mail address",
        "register"            : "register",
        "lableUsername"       : "USERNAME",
        "lablePassword"       : "PASSWORD",
        "lableEmail"          : "E-MAIL",
        "lableCountry"        : "COUNTRY",
        "lableCity"           : "CITY",
        "errorUser"           : "Field can't be empty.",
        "errorPassword"       : "Field can't be empty.",
        "errorEmail"          : "Invalid email address.",
        "errorCountry"        : "Field can't be empty.",
        "errorCity"           : "Field can't be empty."
      };
    };

    getEventsForTheme = (menuItem: any): any => {
      var that = this;
        return {
            onRegister: function(params) {
                that.toastCtrl.presentToast('onRegister');
            },
            onSkip: function(params) {
                that.toastCtrl.presentToast('onSkip');
            }
        };
    };

    prepareParams = (item: any) => {
        let result = {
            title: item.title,
            data: [],
            events: this.getEventsForTheme(item)
        };
        result[this.getShowItemId(item)] = true;
        return result;
    };

    getShowItemId = (item: any): string => {
        return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    };

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('register/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                        that.loadingService.hide();
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        that.loadingService.hide();
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
}
