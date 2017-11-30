import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { storage } from '../../storage';
import { TypesPage } from '../types/types';

/**
 * Generated class for the DevicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html',
})
export class DevicesPage {

  add = false;
  connected = [];
  allDevices = [
    {name: 'Fitbit', image: 'fitbit.png', href: 'https://www.fitbit.com/login'},
    {name: 'Garmin', image: 'garmin.png', href: 'https://connect.garmin.com/SIGNIN'},
    {name: 'Xiaomi', image: 'xiaomi.png', href: 'https://account.xiaomi.com/pass/serviceLogin'},
  ];

  get devices() {
    return this.allDevices.filter(
      device => this.connected.every(conn => conn.name !== device.name));
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.add = navParams.get('add');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicesPage');
  }

  ionViewWillEnter() {
    this.connected = storage.get('connected') || [];
  }

  onDelete(device) {
    this.connected.splice(this.connected.indexOf(device), 1);
    storage.set('connected', this.connected);
  }

  onAddDevice(device) {
    if (device.href) {
      window.open(device.href, '_system');
    }

    this.loadingCtrl.create({
      content: 'Loading…',
      duration: 500
    }).present().then(() => {
      this.connected.push(device);
      storage.set('connected', this.connected);
    });
  }

  onSkip() {
    this.navCtrl.pop({animate: false});
    this.navCtrl.push(TypesPage);
  }

}
