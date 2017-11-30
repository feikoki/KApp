import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from 'ionic-angular';


import { storage } from '../../storage';
import { CreateGroupPage } from '../create-group/create-group';
import { GroupInfoPage } from '../group-info/group-info';

@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html'
})
export class GroupsPage {

  groups = [];

  constructor(public navCtrl: NavController, public sanitizer: DomSanitizer) {

  }

  ionViewWillEnter() {
    this.groups = storage.get('groups');
  }

  onCreateGroup() {
    this.navCtrl.push(CreateGroupPage);
  }

  onViewGroup(group) {
    this.navCtrl.push(GroupInfoPage, {group: group});
  }

  safeStyle(x) {
    return x ? this.sanitizer.bypassSecurityTrustStyle('url(' + x + ')') : null;
  }

}
