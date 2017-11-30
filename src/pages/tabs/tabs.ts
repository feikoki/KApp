import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { GroupsPage } from '../groups/groups';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

import { storage } from '../../storage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = GroupsPage;

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {
    const user = storage.get('user');
    if (!user) {
      this.navCtrl.push(SignupPage, {}, {animate: false});
    }
  }
}
