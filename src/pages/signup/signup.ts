import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { DevicesPage } from '../devices/devices';
import { storage } from '../../storage';

/**
 * Generated class for the SignupPage page.
 * * See https://ionicframework.com/docs/components/#navigation for more info on * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  mode = 'Landing';

  fullName = '';
  email = '';
  password = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  onGo(target: string) {
    this.mode = target;
  }

  onSignup() {
    if (!this.fullName || !this.email || !this.password) {
      console.log(this);
      this.toastCtrl.create({
        message: 'Please fill in all information',
        duration: 1000
      }).present();
      return;
    }

    this.loadingCtrl.create({
      content: 'Loading…',
      duration: 500
    }).present().then(() => {
      this.navCtrl.pop({animate: false});
      this.navCtrl.push(DevicesPage, {add: true}, {});
    });

    storage.set('user', {
      fullName: this.fullName,
      email: this.email,
      password: this.password
    });
  }
}
