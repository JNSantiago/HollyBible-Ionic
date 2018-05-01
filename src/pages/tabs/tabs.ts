import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';
import { MarksPage } from '../marks/marks';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  booksRoot = HomePage;
  marksRoot = MarksPage;
  settingsRoot = SettingsPage;


  constructor(public navCtrl: NavController) {}

}
