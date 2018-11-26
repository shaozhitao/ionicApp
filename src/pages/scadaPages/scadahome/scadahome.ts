import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServoPage } from '../servo/servo';
import { LampPage } from '../lamp/lamp';
import { Scada11Page } from '../scada11/scada11';
import { FrequencyPage } from '../frequency/frequency';

/**
 * Generated class for the ScadahomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scadahome',
  templateUrl: 'scadahome.html',
})
export class ScadahomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScadahomePage');
  }
  goServo(){
    this.navCtrl.push(ServoPage);
  }
  goFrequency(){
    this.navCtrl.push(FrequencyPage);
  }
  goPressure(){
    this.navCtrl.push(Scada11Page);
  }
  goLamp(){
    this.navCtrl.push(LampPage);
  }

}
