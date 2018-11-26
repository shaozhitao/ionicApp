import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Jsonp } from '@angular/http';

/**
 * Generated class for the ServoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var echarts;
@IonicPage()
@Component({
  selector: 'page-servo',
  templateUrl: 'servo.html',
})
export class ServoPage {
  public a=1;
  //定时器
  public interval:any;
  //伺服运行状态值
  public run='ON';
  public stop='--';
  //伺服控制字值
  public servoFont=50;

  //创建图表容器
  public mySpeed:any;
  public myPosition:any;

  //创建图表..
  public Speed:any;
  public Position:any;

  EchartSpeed:any;
  EchartPosition:any;

  @ViewChild('speed') containerSpeed: ElementRef;
  @ViewChild('position') containerPosition: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public http: Http, public jsonp: Jsonp) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServoPage');
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
  
    let ctelementSpeed = this.containerSpeed.nativeElement;
    let ctelementPostion = this.containerPosition.nativeElement;

    this.Speed={
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
                formatter:'{value}',
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

    this.Position = {
        title : {
      text: '定位距离',
      subtext: '实时数据',
      fontSize: 5,
      
  },
  grid:{x:45},
  tooltip : {
      trigger: 'axis'
  },
  legend: {
      data:['2011年', '2012年']
  },
  toolbox: {
      show : true,
      feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar']},
          restore : {show: true},
          saveAsImage : {show: true}
      }
  },
  calculable : true,
  xAxis : [
    {
      type : 'value',
      boundaryGap : [0, 0.01]
  }
  ],
  yAxis : [
      {
          type : 'category',
          data : ['(mm)'],
          fontSize : 5
      }
  ],
  series : [
      {
          name:'定位距离',
          type:'bar',
          radius : '60%',
          data:[300]
      }
  ]};

    this.EchartSpeed = echarts.init(ctelementSpeed);
    this.EchartSpeed.setOption(this.Speed);

    this.EchartPosition = echarts.init(ctelementPostion);
    this.EchartPosition.setOption(this.Position);

    var _that = this;
    // console.log('是什么:',this.EChart.echarts)
    var url="http://219.143.186.88:8888/ionicDa/servoData1/?callback=JSONP_CALLBACK";
    // var url="http://192.168.12.77:8888/ionicDa/ionicRobot1/?callback=JSONP_CALLBACK";
    this.interval = setInterval(()=>{
    this.jsonp.get(url)
    .subscribe(
      function(data){
        var data1 = data['_body'];  //获取数据
        var switchBool = data1['servoSwitch'];
        _that.servoFont=data1['servoFont'];
        _that.Speed.series[0].data[0].value=data1['servoSpeed'];
        _that.Position.series[0].data[0]=data1['servoDistance'];
        _that.EchartSpeed.setOption(_that.Speed);
        _that.EchartPosition.setOption(_that.Position);

        if(switchBool==1){
            document.getElementById('servod1_12b').style.backgroundColor='green';
            document.getElementById('servod1_13b').style.backgroundColor='#2F4964';
            _that.run='NO';
            _that.stop='--';
        }else{
            document.getElementById('servod1_12b').style.backgroundColor='#2F4964';
            document.getElementById('servod1_13b').style.backgroundColor='red';
            _that.run='--';
            _that.stop='OFF';
        };
        
      })
    },1000)
  }

}
