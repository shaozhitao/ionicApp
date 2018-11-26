import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';

/**
 * Generated class for the HuatecPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var echarts;
// declare var echarts2;

@IonicPage()
@Component({
  selector: 'page-huatec',
  templateUrl: 'huatec.html',
})
export class HuatecPage {
  @ViewChild('EchartsContent') container:ElementRef;
//   EChart:any;
  @ViewChild('tubiao') container2:ElementRef;
  EChart:any;

//   Echart2:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {  //当页面加载的时候触发，仅在页面创建的时候触发一次，如果被缓存了，那么下次再打开这个页面则不会触发
      console.log('ionViewDidLoad HuatecPage');
      var data = [];
      for (var i = 0; i <= 360; i++) {
        var t = i / 180 * Math.PI;
        var r = Math.sin(2 * t) * Math.cos(2 * t);
        data.push([r, i]);
      }
  
      let ctelement = this.container.nativeElement;
      let ctelement2 = this.container2.nativeElement;
    //   this.EChart2 = echarts2.init(ctelement2);
      this.EChart = echarts.init(ctelement);
   
      this.EChart.setOption(
        {
          
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              orient : 'vertical',
              x : 'center',
              y : 'bottom',
            //   color: white,
              data:['机器人本体','scada','仿真','数控','自动化'],
              textStyle:{//图例文字的样式
                color:'#ccc',
                fontSize:10}
          },
          toolbox: {
              show : true,
              feature : {
                  mark : {show: true},
                  dataView : {show: true, readOnly: false},
                  magicType : {
                      show: true, 
                      type: ['pie', 'funnel'],
                      option: {
                          funnel: {
                              x: '25%',
                              width: '50%',
                              funnelAlign: 'left',
                              max: 1548
                          }
                      }
                  },
                  restore : {show: true},
                  saveAsImage : {show: true}
              }
          },
          calculable : true,
          color:['red', 'green','yellow','blueviolet','blue'],
          series : [
              {
                  name:'访问来源',
                  type:'pie',
                  radius : '55%',
                  center: ['45%', '30%'],
                  
                  labelLine:{
                    normal:{
                        length:0.1 
                    } 
                    },
                  label: {
                      normal: {
                           textStyle: {
                                 color: 'white',  // 改变标示文字的颜色
                                 fontSize:1  //改变标示文字大小
                           }
                      }
                 },
                  data:[
                      {value:335, name:'机器人本体'},
                      {value:310, name:'scada'},
                      {value:234, name:'仿真'},
                      {value:135, name:'数控'},
                      {value:548, name:'自动化'}
                  ]
                 
              }
          ]
      }
      ),
      this.EChart = echarts.init(ctelement2);
      this.EChart.setOption(
        {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                x : 'center',
                y : 'bottom',
                data:['综合'],
                textStyle:{//图例文字的样式
                    color:'#ccc',
                    fontSize:10}
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            polar : [
                {   
                    
            		nameGap : 5, // 图中工艺等字距离图的距离
                        center:['50%','50%'], // 图的位置
                        name:{
                        show: true, // 是否显示工艺等文字
                        formatter: null, // 工艺等文字的显示形式
                        textStyle: {
                            color:'#a3a5b6' ,// 工艺等文字颜色
                            fontSize:5
                           }
                         },
                    indicator : [
                        {text : '故障率', max  : 100},
                        {text : '舒适度', max  : 100},
                        {text : '完好率', max  : 100},
                        {text : '负载率', max  : 100},
                        {text : '功能性', max  : 100}
                    ],
                    radius : 50,
                    fontSize: 1
                }
            ],
            series : [
                {
                    name: '综合分析数据',
                    type: 'radar',
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'default'
                            }
                        }
                    },
                    data : [
                        {
                            value : [97, 32, 74, 95, 88, 92],
                            name : '综合'
                        }
                    ]
                }
            ]
        }

      )
      
     

    }

  // ionViewDidLoad() {//当页面加载的时候触发，仅在页面创建的时候触发一次，如果被缓存了，那么下次再打开这个页面则不会触发
  //   console.log('ionViewDidLoad HuatecPage');
  //   var data = [];
  //   for (var i = 0; i <= 360; i++) {
  //     var t = i / 180 * Math.PI;
  //     var r = Math.sin(2 * t) * Math.cos(2 * t);
  //     data.push([r, i]);
  //   }

  //   let ctelement = this.container.nativeElement;
  //   this.EChart = echarts.init(ctelement);
  //   this.EChart.setOption({
  //     title: {
  //       text: '极坐标双数值轴'
  //     },
  //     legend: {
  //       data: ['line']
  //     },
  //     polar: {
  //       center: ['50%', '54%']
  //     },
  //     tooltip: {
  //       trigger: 'axis',
  //       axisPointer: {
  //         type: 'cross'
  //       }
  //     },
  //     angleAxis: {
  //       type: 'value',
  //       startAngle: 0
  //     },
  //     radiusAxis: {
  //       min: 0
  //     },
  //     series: [{
  //       coordinateSystem: 'polar',
  //       name: 'line',
  //       type: 'line',
  //       showSymbol: false,
  //       data: data
  //     }],
  //     animationDuration: 2000
  //   });

  // }

}
