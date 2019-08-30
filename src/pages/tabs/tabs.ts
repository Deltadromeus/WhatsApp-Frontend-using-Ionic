import { Component, ViewChild } from '@angular/core';
import { Tabs, NavController, NavParams } from 'ionic-angular';


import { SwipeTabDirective } from '../../directives/swipe-tab.directive';
import { CallsPage } from '../calls/calls';
import { CamPage } from '../cam/cam';
import { ChatsPage } from '../chats/chats';
import { StatusPage } from '../status/status';


@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    @ViewChild(SwipeTabDirective) swipeTabDirective: SwipeTabDirective;
    @ViewChild('myTabs') tabRef: Tabs;

  
    tab1Root = CamPage;
    tab2Root = ChatsPage;
    tab3Root = StatusPage;
    tab4Root = CallsPage;
    pic: any;
    constructor(public navCtrl: NavController, public navParams: NavParams,) { }
    

    transition($event) {
        this.swipeTabDirective.onTabInitialized($event.index);
    }

    onTabChange(index: number) {
        this.tabRef.select(index);
    }
}
