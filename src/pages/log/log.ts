import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http, Jsonp } from '@angular/http';

import { OtherPage } from '../other/other';
// import { ImplicitReceiver } from '@angular/compiler';
// import { Observable } from 'rxjs/Observable';
// import "rxjs/Rx";

/**
 * Generated class for the LogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log',
  templateUrl: 'log.html',
})
export class LogPage {

  public list=[];
  public jd1 = 0;
  public jd2 = 0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public http: Http, public jsonp: Jsonp) {
      // var _that=this;
      // var url="";
      
      // this.http.get(url).subscribe(function(data){
      //   console.log(data['_body']);
      //   that.list=JSON.parse(data['_body']).result;
      //   console.log(that.list);
      // },function(err){
      //   console.log('出错了:',err)
      // })

      // this.requestContent()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogPage');
  }
  // requestContent(){
    // var url="http://192.168.1.100:8888/aaa/aaa?callback=JSONP_CALLBACK";
    // var url="http://192.168.12.77:8888/data_1/go";
    // this.jsonp.get("http://192.168.1.100:8888/aaa/aaa?callback=JSONP_CALLBACK")
    // .map(res => res.json()).subscribe(function(data){
      
  //   },function(err){
  //     console.log(err)
  //   })
  // }

  res_call(request){
    console.log(request)
  }

  goLandscape(){
    this.navCtrl.push(OtherPage);
  }

  // requestContent(){
  //   var url="http://192.168.12.77:8888/aaa/aaa?callback=JSONP_CALLBACK";
  //   this.jsonp.get(url)
  //     .subscribe(
  //       function(data){
  //         console.log(data);
  //       },function(err){
  //         console.log("失败")
  //       }
  //     )
  // }

  requestContent(){
    var _that = this;
    var url="http://219.143.186.88:8888/ionicDa/ionicRobot1/?callback=JSONP_CALLBACK";
    var jd1 = 10;
    this.jsonp.get(url)
      .subscribe(
        function(data){
          // console.log(data['_body']['jd1']);
          console.log(data['_body']);
          _that.jd1 = data['_body']['riqi'];
          console.log(jd1)
          // console.log(_that.jd1);
          console.log(_that.jd2);

        },function(err){
          console.log("失败")
        }
      )
  }

  requestContent2(){
    var url="http://219.143.186.88:8888/ionicDa/ionic_data2/?callback=JSONP_CALLBACK";
    this.jsonp.get(url)
      .subscribe(
        function(data){
          console.log(data);
        },function(err){
          console.log("失败")
        }
      )
  }

}
