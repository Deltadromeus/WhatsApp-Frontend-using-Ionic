import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { CameraOptions, Camera } from '@ionic-native/camera';

/**
 * Generated class for the CamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cam',
  templateUrl: 'cam.html',
})
export class CamPage {
  pic: any;
  seeTabs;
  tabBarElement: any;

  constructor(private platform : Platform, public navCtrl: NavController, public navParams: NavParams, private camera:Camera) {
      this.tabBarElement = document.querySelector('.tabbar.show-tabbar');

    this.platform.ready().then(()=> {
     const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        saveToPhotoAlbum : true,
        
        
          }
      
      this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64 (DATA_URL):
       let base64Image = 'data:image/jpeg;base64,' + imageData;
       this.pic = base64Image;
      }, (err) => {
       // Handle error
      });
    })
  }

    ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';


  }
 
  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }


 
  ionViewDidLoad() {
 
    console.log('ionViewDidLoad CamPage');
  }

}
