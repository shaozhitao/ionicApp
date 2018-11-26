import { Component } from '@angular/core';
import {  NavController, NavParams, } from 'ionic-angular';

/**
 * Generated class for the HuatecPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// declare var echarts;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  // @ViewChild('EchartsContent') container:ElementRef;
  // EChart:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad HomePage');
  //   var data = [];
  //   for (var i = 0; i <= 360; i++) {
  //     var t = i / 180 * Math.PI;
  //     var r = Math.sin(2 * t) * Math.cos(2 * t);
  //     data.push([r, i]);
  //   }

  //   let ctelement = this.container.nativeElement;
  //   this.EChart = echarts.init(ctelement);
  //   this.EChart.setOption({
  //     title : {
  //     x:'center'
  // },
  // tooltip : {
  //     trigger: 'item',
  //     formatter: "{a} <br/>{b} : {c} ({d}%)"
  // },
  // legend: {
  //     orient : 'vertical',
  //     x : 'left',
  //     data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
  // },
  // toolbox: {
  //     show : true,
  //     feature : {
  //         mark : {show: true},
  //         dataView : {show: true, readOnly: false},
  //         magicType : {
  //             show: true, 
  //             type: ['pie', 'funnel'],
  //             option: {
  //                 funnel: {
  //                     x: '25%',
  //                     width: '50%',
  //                     funnelAlign: 'left',
  //                     max: 1548
  //                 }
  //             }
  //         },
  //         restore : {show: true},
  //         saveAsImage : {show: true}
  //     }
  // },
  // calculable : true,
  // color:['red', 'green','yellow','blueviolet','blue'],
  // series : [
  //     {
  //         name:'访问来源',
  //         type:'pie',
  //         radius : '65%',
  //         center: ['50%', '60%'],
  //         data:[
  //             {value:335, name:'直接访问'},
  //             {value:310, name:'邮件营销'},
  //             {value:234, name:'联盟广告'},
  //             {value:135, name:'视频广告'},
  //             {value:1548, name:'搜索引擎'}
  //         ]
  //     }
  // ]
  //   });

    
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad HomePage');
  //   var data = [];
  //   for (var i = 0; i <= 360; i++) {
  //     var t = i / 180 * Math.PI;
  //     var r = Math.sin(2 * t) * Math.cos(2 * t);
  //     data.push([r, i]);
  //   }

  //   let ctelement = this.container.nativeElement;
  //   this.EChart = echarts.init(ctelement);
  //   this.EChart.setOption({
  //     xAxis: {
  //       type: 'category',
  //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //     },
  //     yAxis: {
  //       type: 'value'
  //     },
  //     series: [{
  //       data: [8, 9, 4, 6, 9, 6, 7],
  //       type: 'line',
  //       smooth: true
  //     }]
  //   });

    
  // }


  
}