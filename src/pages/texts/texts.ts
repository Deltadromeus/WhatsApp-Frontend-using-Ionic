import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';


/**
 * Generated class for the TextsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-texts',
  templateUrl: 'texts.html',
})
export class TextsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private keyboard: Keyboard) {
    this.keyboard.show();
  }

  popKeyboard(){
    this.keyboard.show(); 
  }
 
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextsPage');
  }

}
