import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Jsonp } from '@angular/http';

/**
 * Generated class for the LampPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lamp',
  templateUrl: 'lamp.html',
})
export class LampPage {
  public a=1;
  public interval:any;
  public run1='ON';
  public run2='ON';
  public run3='ON';
  public run4='ON';
  public stop1='--';
  public stop2='--';
  public stop3='--';
  public stop4='--';



  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public jsonp: Jsonp) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LampPage');
    this.initData();
  }
 
  ionViewWillLeave(){
    this.a=2;
    clearInterval(this.interval)
  }

  ionViewDidEnter(){
    if(this.a==2){
      this.initData();  
    }
  }

  initData(){
    var _that=this;
    var url="http://219.143.186.88:8888/ionicDa/lampData1/?callback=JSONP_CALLBACK";
  // var url="http://192.168.12.77:8888/ionicDa/ionicRobot1/?callback=JSONP_CALLBACK";
    this.interval = setInterval(()=>{
    this.jsonp.get(url)
    .subscribe(
      function(data){
        var data1 = data['_body'];  //获取数据
        // console.log(this.data1)
      
        // console.log(data1);
        if(data1['led1']==1){
          console.log('led1');
          document.getElementById('lamp1_12b').style.backgroundColor='green';
          document.getElementById('lamp1_13b').style.backgroundColor='#2F4964';
          _that.run1='NO';
          _that.stop1='--';
        }else{
          console.log('led2');
          document.getElementById('lamp1_12b').style.backgroundColor='#2F4964';
          document.getElementById('lamp1_13b').style.backgroundColor='red';
          _that.run1='--';
          _that.stop1='OFF';
        };
        if(data1['led2']==1){
          document.getElementById('lamp2_12b').style.backgroundColor='green';
          document.getElementById('lamp2_13b').style.backgroundColor='#2F4964';
          _that.run2='NO';
          _that.stop2='--';
        }else{
          document.getElementById('lamp2_12b').style.backgroundColor='#2F4964';
          document.getElementById('lamp2_13b').style.backgroundColor='red';
          _that.run2='--';
          _that.stop2='OFF';
        };
        if(data1['led3']==1){
          console.log(111111)
          document.getElementById('lamp3_12b').style.backgroundColor='green';
          document.getElementById('lamp3_13b').style.backgroundColor='#2F4964';
          _that.run3='NO';
          _that.stop3='--';
        }else{
          document.getElementById('lamp3_12b').style.backgroundColor='#2F4964';
          document.getElementById('lamp3_13b').style.backgroundColor='red';
          _that.run3='--';
          _that.stop3='OFF';
        };
        if(data1['led4']==1){
          document.getElementById('lamp4_12b').style.backgroundColor='green';
          document.getElementById('lamp4_13b').style.backgroundColor='#2F4964';
          _that.run4='NO';
          _that.stop4='--';
        }else{
          document.getElementById('lamp4_12b').style.backgroundColor='#2F4964';
          document.getElementById('lamp4_13b').style.backgroundColor='red';
          _that.run4='--';
          _that.stop4='OFF';
        };
        
      },function(err){
        console.log(err);
      })
  },1000)
  }
}
