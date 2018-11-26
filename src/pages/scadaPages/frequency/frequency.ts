import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Jsonp } from '@angular/http';

/**
 * Generated class for the FrequencyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var echarts;
@IonicPage()
@Component({
  selector: 'page-frequency',
  templateUrl: 'frequency.html',
})
export class FrequencyPage {
  public a=1;
  //声明定时器
  public interval:any;
  //变频运行状态值
  public run='ON';
  public stop='--';

  //创建图表容器
  public myCurrent:any;

  //创建图表...
  public Current:any;
  public Frequency:any;

  EchartsCurrent:any;
  EchartsFrequency:any;

  @ViewChild('current') containerCurrent: ElementRef;
  @ViewChild('fre') containerfrequency: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public jsonp: Jsonp) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrequencyPage');
    this.initData();
  }

  ionViewWillLeave(){
    this.a = 2;
    clearInterval(this.interval);

  }
  ionViewDidEnter(){
    if(this.a==2){
        this.initData(); 
    };
    
  }

  initData(){
    var data = [];
    for (var i = 0; i <= 360; i++) {
      var t = i / 180 * Math.PI;
      var r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }
  
    let ctelementCurrent = this.containerCurrent.nativeElement;
    let ctelementFrequency = this.containerfrequency.nativeElement;
    

    this.Current={
      tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['瞬时电流']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
    };
    this.Frequency={
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
                data:[{value: 30, name: '频率(Hz)'}]
            }
        ]
    };

    this.EchartsCurrent = echarts.init(ctelementCurrent);
    this.EchartsCurrent.setOption(this.Current);

    this.EchartsFrequency = echarts.init(ctelementFrequency);
    this.EchartsFrequency.setOption(this.Frequency);

    var _that=this;
    // document.getElementById('lamp1_12b').style.backgroundColor='green';
    var url="http://219.143.186.88:8888/ionicDa/frequency1/?callback=JSONP_CALLBACK";
  // var url="http://192.168.12.77:8888/ionicDa/ionicRobot1/?callback=JSONP_CALLBACK";
    this.interval = setInterval(()=>{
    this.jsonp.get(url)
    .subscribe(
      function(data){
        var data1 = data['_body'];  //获取数据
        // _that.Temperature1.series[0].data[0].value= data1['wdz'];
        var switchBool = data1['frequencyWitch'];
        _that.Frequency.series[0].data[0].value= data1['frequencyHz']; 
        _that.EchartsFrequency.setOption(_that.Frequency);
        if(switchBool==1){
            document.getElementById('frequencyd1_12b').style.background='green';
            document.getElementById('frequencyd1_13b').style.background='#2F4964';
            _that.run='NO';
            _that.stop='--';
        }else{
            document.getElementById('frequencyd1_12b').style.background='#2F4964';
            document.getElementById('frequencyd1_13b').style.background='red';
            _that.run='--';
            _that.stop='OFF';
        };

        
      },function(err){
        console.log('出错了');
        console.log(err);
      })
  },1000)

      
  }
}

