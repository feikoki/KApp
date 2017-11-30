import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer, public sharing: SocialSharing, public alertCtrl: AlertController) {
    this.group = this.navParams.get('group');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupInfoPage');
  }

  safeStyle(x) {
    return x ? this.sanitizer.bypassSecurityTrustStyle('url(' + x + ')') : null;
  }

  onShare() {
    this.sharing.share('I am current 3rd on the leaderboard! https://bit.ly/',
        `Check out the leaderboard for ${this.group.name}!`)
  }

  onGetLink() {
    this.alertCtrl.create({
      title: 'Invite Link',
      inputs: [
        {
          name: 'link',
          value: 'https://bit.ly/'
        }
      ],
      buttons: [
        {text: 'Close'}
      ]
    }).present();
  }

}
