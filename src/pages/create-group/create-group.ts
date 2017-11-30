import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { storage } from '../../storage';

/**
 * Generated class for the CreateGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-group',
  templateUrl: 'create-group.html',
})
export class CreateGroupPage {

  name = '';
  description = '';
  privacy = 'public';
  image = null;
  imageUrl = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateGroupPage');
  }

  onSave() {
    if (!this.name) {
      console.log(this);
      this.toastCtrl.create({
        message: 'Please fill in all information',
        duration: 1000
      }).present();
      return;
    }

    const group = {
      name: this.name,
      description: this.description,
      privacy: this.privacy,
      imageUrl: this.imageUrl,
    };

    const groups = storage.get('groups');
    groups.push(group);
    storage.set('groups', groups);

    this.navCtrl.pop();
  }

  onUploadImage(event) {
    this.image = event.target.files[0];
    if (this.image) {
      // Convert to data URI
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.imageUrl = reader.result;
      })
      reader.readAsDataURL(this.image);
    } else {
      this.imageUrl = null;
    }
  }

  safeStyle(x) {
    return x ? this.sanitizer.bypassSecurityTrustStyle('url(' + x + ')') : null;
  }

}
