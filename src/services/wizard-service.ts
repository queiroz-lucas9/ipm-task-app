import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class WizardService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) {}

    getId = (): string => 'wizard';

    getTitle = (): string => 'Wizard';

    getAllThemes = (): Array<any> => {
        return [
            {"title" : "Simple + image", "theme"  : "layout1"},
            {"title" : "Big image", "theme"  : "layout2"},
            {"title" : "Big Image + Text", "theme"  : "layout3"}
        ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

 // WIZARD - Simple + image data
 getDataForLayout1 = (): any => {
     return {
         "btnPrev": "Previous",
         "btnNext": "Next",
         "btnFinish": "Finish",
         "items": [
             {
                 "logo": "assets/images/logo/2.png",
                 "title": "Welcome to our new iOS style theme",
                 "description": "Finished layouts and components for Ionic 3. Ready to use!"
             },
             {
                 "logo": "assets/images/logo/2.png",
                 "title": "For Developers",
                 "description": "Save hours of developing. Tons of funcional components."
             },
             {
                 "logo": "assets/images/logo/2.png",
                 "title": "For Designers",
                 "description": "Endless possibilities. Combine layouts as you wish."
             }
         ]
     };
    };

    // WIZARD - Big image data
    getDataForLayout2 = (): any => {
        return {
            "btnNext": "Next",
            "btnFinish": "Finish",
            "items": [
                {
                    "welcome": "Welcome",
                    "backgroundImage": "assets/images/background/9.jpg",
                    "title": "Welcome to our new iOS theme",
                    "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    "welcome": "Welcome",
                    "backgroundImage": "assets/images/background/8.jpg",
                    "title": "Welcome to our new iOS theme",
                    "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    "welcome": "Welcome",
                    "backgroundImage": "assets/images/background/10.jpg",
                    "title": "Welcome to our new iOS theme",
                    "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                }
            ]
        };
    };

    // WIZARD - Big Image + Text
    getDataForLayout3 = (): any => {
        return {
            "btnNext": "Next",
            "btnFinish": "Finish",
            "items": [
                {
                    "backgroundImage": "assets/images/background/21.jpg",
                    "subtitle": "Page 1",
                    "title": "Lorem ipsum dolor sit amet, consectetur"
                },
                {
                    "backgroundImage": "assets/images/background/22.jpg",
                    "subtitle": "Page 2",
                    "title": "Lorem ipsum dolor sit amet, consectetur"
                },
                {
                    "backgroundImage": "assets/images/background/23.jpg",
                    "subtitle": "Page 3",
                    "title": "Lorem ipsum dolor sit amet, consectetur"
                }
            ]
        };
    }

    getEventsForTheme = (menuItem: any): any => {
        var that = this;
        return {
            'onFinish': function(event: any) {
                  that.toastCtrl.presentToast("Finish");
            }
        };
    };

    getShowItemId = (item: any): string => {
        return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    }

    prepareParams = (item: any) => {
        let result = {
            title: item.title,
            data: this.getDataForTheme(item),
            events: this.getEventsForTheme(item)
        };
        result[this.getShowItemId(item)] = true;
        return result;
    };

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('wizard/' + item.theme)
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
    };
}
