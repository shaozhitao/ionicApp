import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ScadaPage } from '../scada/scada';
import { Scada2Page } from '../scada2/scada2';
import { NewsPage } from '../news/news';
import { ScadahomePage } from '../scadaPages/scadahome/scadahome';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  goScada(){
    this.navCtrl.push(ScadaPage);
  }
  
  goScada2(){
    this.navCtrl.push(Scada2Page);
  }
  gonews(){
    this.navCtrl.push(NewsPage);
  }
  goScada3(){
    this.navCtrl.push(ScadahomePage);
  }

}
