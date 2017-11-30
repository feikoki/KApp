import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TypesPage } from '../types/types';
import { storage } from '../../storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {};
  types = [];

  icons = {
    'Walking': 'body',
    'Running': 'walk',
    'Biking': 'bicycle',
    'Swimming': 'water',
    'Sleeping': 'home',
    'Weight': 'pulse',
  };

  values = {
    'Walking': '23min',
    'Running': '50min',
    'Biking': '0min',
    'Swimming': '0min',
    'Sleeping': '7.4h',
    'Weight': '62.3kg',
  };

  date = new Date();

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {
    this.user = storage.get('user') || {};
    this.types = storage.get('types') || [];
  }

  onViewTypes() {
    this.navCtrl.push(TypesPage);
  }

  onChangeDate(offset) {
    this.date = new Date(this.date);
    this.date.setDate(this.date.getDate() + offset);
    const today = new Date();
    if (this.date.getTime() > today.getTime())
      this.date = today;
  }

}
