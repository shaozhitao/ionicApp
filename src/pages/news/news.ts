import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  public list=[];
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

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
