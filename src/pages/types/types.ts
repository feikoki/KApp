import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { storage } from '../../storage';

/**
 * Generated class for the TypesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-types',
  templateUrl: 'types.html',
})
export class TypesPage {

  types = [];

  allTypes = [
    'Running',
    'Walking',
    'Biking',
    'Swimming',
    'Sleeping',
    'Weight'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypesPage');
  }

  ionViewWillEnter() {
    this.types = storage.get('types') || [];
  }

  onToggle(item) {
    const index = this.types.indexOf(item);
    if (index === -1)
      this.types.push(item);
    else
      this.types.splice(index, 1);
    storage.set('types', this.types);
  }

}
