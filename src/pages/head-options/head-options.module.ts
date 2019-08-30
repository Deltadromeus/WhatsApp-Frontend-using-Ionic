import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeadOptionsPage } from './head-options';

@NgModule({
  declarations: [
    HeadOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(HeadOptionsPage),
  ],
})
export class HeadOptionsPageModule {}
