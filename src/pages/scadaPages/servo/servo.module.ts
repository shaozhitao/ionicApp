import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServoPage } from './servo';

@NgModule({
  declarations: [
    ServoPage,
  ],
  imports: [
    IonicPageModule.forChild(ServoPage),
  ],
})
export class ServoPageModule {}
