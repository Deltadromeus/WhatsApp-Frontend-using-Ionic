import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';
import { Keyboard } from '@ionic-native/keyboard'

import { Camera } from '@ionic-native/camera';
import { TabsPage } from '../pages/tabs/tabs';
import { SwipeTabDirective } from '../directives/swipe-tab.directive';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ChatsPage } from '../pages/chats/chats';
import { CallsPage } from '../pages/calls/calls';
import { StatusPage } from '../pages/status/status';
import { CamPage } from "../pages/cam/cam";
import { HeadOptionsPage } from '../pages/head-options/head-options';

@NgModule({
  declarations: [
    MyApp,
    CamPage,
    ChatsPage,
    CallsPage,
    StatusPage,
    TabsPage,
    SwipeTabDirective,
    HeadOptionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CamPage,
    ChatsPage,
    CallsPage,
    StatusPage,
    TabsPage,
    HeadOptionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
