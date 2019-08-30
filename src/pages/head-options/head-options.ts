import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HeadOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-head-options',
  templateUrl: 'head-options.html',
})
export class HeadOptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  newGroup() {

  }

  newBroadcast() {

  }

  wappWeb() {

  }

  starredMsgs() {
    
  }

  settings() {
    this.navCtrl.push('SettingsPage');
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad HeadOptionsPage');
  }
}

