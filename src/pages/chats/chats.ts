import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { HeadOptionsPage } from '../head-options/head-options';

/**
 * Generated class for the ChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public pop: PopoverController,
  
   ) {
  }

  presentPopover(myEvent) {
    let popover = this.pop.create(HeadOptionsPage);
    popover.present({
      ev: myEvent
    });
  }

  contacts() {
    this.navCtrl.push('ContactlistPage');
  }

  texts(){
    this.navCtrl.setRoot('TextsPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }

}
