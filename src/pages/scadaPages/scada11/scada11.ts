import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Jsonp } from '@angular/http';

/**
 * Generated class for the Scada11Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var echarts;
@IonicPage()
@Component({
  selector: 'page-scada11',
  templateUrl: 'scada11.html',
})
export class Scada11Page {
  public a=1;
  public interval:any;
  //声明图表容器
  public myTemperature1:any;
  public myPressure1:any;

  //声明图表..
  public Temperature1:any;
  public Pressure1:any;

  EchartTemperature:any;
  EchartPressure:any;

  @ViewChild('temperature') conTemperature:ElementRef;
  @ViewChild('pressure') conPressure:ElementRef;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public jsonp: Jsonp) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Scada11Page');
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
    var data = [];
    for (var i = 0; i <= 360; i++) {
      var t = i / 180 * Math.PI;
      var r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }
    
    let ctelementTemperature = this.conTemperature.nativeElement;
    let ctelementPressure = this.conPressure.nativeElement;
    
    this.Temperature1={
      tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'业务指标',
            type:'gauge',
            radius : '80%',
            // fontSize:1,
            min:0,
            max:75,
            splitNumber: 5,       // 分割段数，默认为5
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.8, '#48b'],[1, '#ff4500']],
                    width: 2
                }
            },
            axisTick: {            // 坐标轴小标记
                splitNumber: 3,   // 每份split细分多少段
                length :4,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    fontSize:5
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto',
                    fontSize:5
                }
            },
            splitLine: {           // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                length :8,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer : {
                width : 5
            },
            title : {
                show : true,
                offsetCenter: [0, '-40%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 8
                }
            },
            detail : {
                formatter:'{value}°',
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto',
                    fontWeight: 'bolder',
                    fontSize:13
                }
            },
            data:[{value: 30, name: '电机速度 r/s'}]
        }
    ]
    };
    this.Pressure1={
      tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'业务指标',
            type:'gauge',
            radius : '80%',
            // fontSize:1,
            min:0,
            max:75,
            splitNumber: 5,       // 分割段数，默认为5
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.8, '#48b'],[1, '#ff4500']],
                    width: 2
                }
            },
            axisTick: {            // 坐标轴小标记
                splitNumber: 3,   // 每份split细分多少段
                length :4,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    fontSize:5
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto',
                    fontSize:5
                }
            },
            splitLine: {           // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                length :8,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer : {
                width : 5
            },
            title : {
                show : true,
                offsetCenter: [0, '-40%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 8
                }
            },
            detail : {
                formatter:'{value}°',
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto',
                    fontWeight: 'bolder',
                    fontSize:13
                }
            },
            data:[{value: 30, name: '电机速度 r/s'}]
        }
    ]
    };

    this.EchartTemperature = echarts.init(ctelementTemperature);
    this.EchartTemperature.setOption(this.Temperature1);

    this.EchartPressure = echarts.init(ctelementPressure);
    this.EchartPressure.setOption(this.Pressure1);

    var _that=this;
    // document.getElementById('lamp1_12b').style.backgroundColor='green';
    var url="http://219.143.186.88:8888/ionicDa/temperature1/?callback=JSONP_CALLBACK";
  // var url="http://192.168.12.77:8888/ionicDa/ionicRobot1/?callback=JSONP_CALLBACK";
    this.interval = setInterval(()=>{
    this.jsonp.get(url)
    .subscribe(
      function(data){
        var data1 = data['_body'];  //获取数据
        // _that.Temperature1.series[0].data[0].value= data1['wdz'];

        document.getElementById('temTag2').style.height=data1["temRed"]+'%';
        document.getElementById('temTag1').style.height=data1["temGreen"]+'%';
        _that.Pressure1.series[0].data[0].value= data1['pre']; 
        _that.EchartPressure.setOption(_that.Pressure1);
        console.log(data1['pre']);  
      },function(err){
        console.log('出错了')
        console.log(err);
      })
  },1000)
  }

}
