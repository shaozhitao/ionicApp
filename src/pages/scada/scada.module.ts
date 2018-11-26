import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScadaPage } from './scada';

@NgModule({
  declarations: [
    ScadaPage,
  ],
  imports: [
    IonicPageModule.forChild(ScadaPage),
  ],
})
export class ScadaPageModule {}
