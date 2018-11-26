import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ScadahPage } from '../scadah/scadah';
import { JiqirenhPage } from '../jiqirenh/jiqirenh';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  public list1=[
    {
      cate:'国内',
      list:[
        {'title':'国内新闻'},
        {'title':'国内新闻'}
      ]
    },
    {
      cate:'宝马',
      list:[
        {'title':'宝马x8'},
        {'title':'宝马x9'}
      ]
    }

  ]

  public interval:any;
  // public duration:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  goScadah(){
    this.navCtrl.push(ScadahPage);
  }
  goJiqirenh(){
    this.navCtrl.push(JiqirenhPage);
  }

  goInterval(){
    var dur = 1;
    

  this.interval = setInterval(()=>{
    dur = dur +1;
    console.log(dur)
  // this.duration = dur;
}, 1000);
  }

}
