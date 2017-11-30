import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GroupInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group-info',
  templateUrl: 'group-info.html',
})
export class GroupInfoPage {
  group;

  leaderboard = [
    {name: 'Patrick', value: '42km'},
    {name: 'Cassie', value: '30km'},
    {name: 'You', value: '25km'},
    {name: 'Nick', value: '6km'},
    {name: 'Evan', value: '0km'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer) {
    this.group = this.navParams.get('group');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupInfoPage');
  }

  safeStyle(x) {
    return x ? this.sanitizer.bypassSecurityTrustStyle('url(' + x + ')') : null;
  }

}
