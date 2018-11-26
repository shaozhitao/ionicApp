import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


// import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact'; 
import { LogPage } from '../log/log';
import { HuatecPage } from '../huatec/huatec';


/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tabRoots: Object[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tabRoots = [{
      root: HuatecPage,
      tabTitle: '概括',
      tabIcon: 'home'
    },{
      root: ContactPage,
      tabTitle: '监控',
      tabIcon: 'about'
    },{
      root: AboutPage,
      tabTitle: '分析',
      tabIcon: 'contact'
    },{
      root: LogPage,
      tabTitle: '日志',
      tabIcon: 'log'
    }];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
