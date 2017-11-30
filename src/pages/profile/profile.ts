import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DevicesPage } from '../devices/devices';
import { storage } from '../../storage';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  user;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get('user') || {};
  }

  ionViewWillEnter() {
    if (!this.user.fullName)
      this.user = storage.get('user');
  }

  onViewDevices() {
    this.navCtrl.push(DevicesPage);
  }

}
