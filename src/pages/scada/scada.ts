import { Component,  ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Jsonp } from '@angular/http';

/**
 * Generated class for the ScadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var echarts;
@IonicPage()
@Component({
  selector: 'page-scada',
  templateUrl: 'scada.html',
})
export class ScadaPage {
  public interval:any;
  public JD1:any;
  public JD2:any;
  public JD3:any;
  public JD4:any;
  public JD5:any;
  public JD6:any;
  public AA:any;
  public BB:any;
  public CC:any;
  public XX:any;
  public YY:any;
  public ZZ:any;

  public Data24:any;
  
  public data111=true;
  public static1=true;
  public ddddd=true;
  public angle1 = 2;
  public angle2 = 2;
  public angle3 = 2;
  public angle4 = 1;
  public angle5 = 1;
  public angle6 = 1;
  public coordinatesA = 1;
  public coordinatesB = 1;
  public coordinatesC = 1;
  public coordinatesX = 1;
  public coordinatesY = 1;
  public coordinatesZ = 1;
  public A:any;
  public B:any;
  public C:any;
  public X:any;
  public Y:any;
  public Z=88;
  @ViewChild('coorA') containerA:ElementRef;
  @ViewChild('coorB') containerB:ElementRef;
  @ViewChild('coorC') containerC:ElementRef;
  @ViewChild('coorX') containerX:ElementRef;
  @ViewChild('coorY') containerY:ElementRef;
  @ViewChild('coorZ') containerZ:ElementRef;
  @ViewChild('ang1') container1:ElementRef;
  @ViewChild('ang2') container2:ElementRef;
  @ViewChild('ang3') container3:ElementRef;
  @ViewChild('ang4') container4:ElementRef;
  @ViewChild('ang5') container5:ElementRef;
  @ViewChild('ang6') container6:ElementRef;
  @ViewChild('data1') container24:ElementRef;

  EChart:any;
  EChart2:any;
  EChart3:any;
  EChart4:any;
  EChart5:any;
  EChart6:any;
  EChartA:any;
  EChartB:any;
  EChartC:any;
  EChartX:any;
  EChartY:any;
  EChartZ:any;
  EChartD:any;
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public jsonp: Jsonp) {
    // this.initData()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScadaPage');

    this.initData()
    
  }

  dddd(){
    if(this.ddddd){
      this.ddddd=false;
    }else{
      this.ddddd=true;
    }
  }

  dataDis(){
    if(this.data111){
      this.data111=false;
    }else{
      this.data111=true;
      
      
    }
  }

  st24Dis(){
    if(this.static1){
      this.static1=false;
    }else{
      this.static1=true;
      
    }  
  }

  initData(){
    // this.data1=true;
    var data = [];
    for (var i = 0; i <= 360; i++) {
      var t = i / 180 * Math.PI;
      var r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }
  
    let ctelementA = this.containerA.nativeElement;
    let ctelementB = this.containerB.nativeElement;
    let ctelementC = this.containerC.nativeElement;
    let ctelementX = this.containerX.nativeElement;
    let ctelementY = this.containerY.nativeElement;
    let ctelementZ = this.containerZ.nativeElement;
    let ctelement1 = this.container1.nativeElement;
    let ctelement2 = this.container2.nativeElement;
    let ctelement3 = this.container3.nativeElement;
    let ctelement4 = this.container4.nativeElement;
    let ctelement5 = this.container5.nativeElement;
    let ctelement6 = this.container6.nativeElement;
    let ctelement24 = this.container24.nativeElement;
    
    this.JD1 = {
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
              min:-195,
              max:195,
              splitNumber: 6,       // 分割段数，默认为5
              axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                      color: [[0.077, '#ff4500'],[0.923, '#48b'],[1, '#ff4500']],
                      width: 2
                  }
              },
              axisTick: {            // 坐标轴小标记
                  splitNumber: 10,   // 每份split细分多少段
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
              data:[{value: 50, name: '１轴角度值'}]
          }
      ]
  };

    this.JD2 = {
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
              min:-100,
              max:165,
              splitNumber: 5,       // 分割段数，默认为5
              axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                      color: [[0.077, '#ff4500'],[0.923, '#48b'],[1, '#ff4500']],
                      width: 2
                  }
              },
              axisTick: {            // 坐标轴小标记
                  splitNumber: 10,   // 每份split细分多少段
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
              data:[{value: 50, name: '2轴角度值'}]
          }
      ]
  };

    this.JD3 = {
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
              min:-210,
              max:80,
              splitNumber: 5,       // 分割段数，默认为5
              axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                      color: [[0.077, '#ff4500'],[0.923, '#48b'],[1, '#ff4500']],
                      width: 2
                  }
              },
              axisTick: {            // 坐标轴小标记
                  splitNumber: 10,   // 每份split细分多少段
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
              data:[{value: 50, name: '3轴角度值'}]
          }
      ]
  };

    this.JD4 = {
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
              min:-180,
              max:180,
              splitNumber: 6,       // 分割段数，默认为5
              axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                      color: [[0.077, '#ff4500'],[0.923, '#48b'],[1, '#ff4500']],
                      width: 2
                  }
              },
              axisTick: {            // 坐标轴小标记
                  splitNumber: 10,   // 每份split细分多少段
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
              data:[{value: 50, name: '4轴角度值'}]
          }
      ]
  };

    this.JD5 = {
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
              min:-140,
              max:140,
              splitNumber: 5,       // 分割段数，默认为5
              axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                      color: [[0.077, '#ff4500'],[0.923, '#48b'],[1, '#ff4500']],
                      width: 2
                  }
              },
              axisTick: {            // 坐标轴小标记
                  splitNumber: 10,   // 每份split细分多少段
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
              data:[{value: 50, name: '5轴角度值'}]
          }
      ]
  };

    this.JD6 = {
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
              min:-360,
              max:360,
              splitNumber: 6,       // 分割段数，默认为5
              axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                      color: [[0.077, '#ff4500'],[0.923, '#48b'],[1, '#ff4500']],
                      width: 2
                  }
              },
              axisTick: {            // 坐标轴小标记
                  splitNumber: 10,   // 每份split细分多少段
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
              data:[{value: 50, name: '6轴角度值'}]
          }
      ]
  };

    this.AA = {
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
              min:-360,
              max:360,
              splitNumber: 6,       // 分割段数，默认为5
              axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                      color: [[0.077, '#ff4500'],[0.923, '#48b'],[1, '#ff4500']],
                      width: 2
                  }
              },
              axisTick: {            // 坐标轴小标记
                  splitNumber: 10,   // 每份split细分多少段
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
              data:[{value: 50, name: 'A轴坐标'}]
          }
      ]
  };

    this.BB = {
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
              min:-360,
              max:360,
              splitNumber: 6,       // 分割段数，默认为5
              axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                      color: [[0.077, '#ff4500'],[0.923, '#48b'],[1, '#ff4500']],
                      width: 2
                  }
              },
              axisTick: {            // 坐标轴小标记
                  splitNumber: 10,   // 每份split细分多少段
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
              data:[{value: 50, name: 'B轴坐标'}]
          }
      ]
  };

    this.CC = {
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
              min:-360,
              max:360,
              splitNumber: 6,       // 分割段数，默认为5
              axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                      color: [[0.077, '#ff4500'],[0.923, '#48b'],[1, '#ff4500']],
                      width: 2
                  }
              },
              axisTick: {            // 坐标轴小标记
                  splitNumber: 10,   // 每份split细分多少段
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
              data:[{value: 50, name: 'C轴坐标'}]
          }
      ]
  };

    this.XX = {
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
              min:-360,
              max:360,
              splitNumber: 6,       // 分割段数，默认为5
              axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                      color: [[0.077, '#ff4500'],[0.923, '#48b'],[1, '#ff4500']],
                      width: 2
                  }
              },
              axisTick: {            // 坐标轴小标记
                  splitNumber: 10,   // 每份split细分多少段
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
              data:[{value: 50, name: 'X轴坐标'}]
          }
      ]
  };

    this.YY = {
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
              min:-360,
              max:360,
              splitNumber: 6,       // 分割段数，默认为5
              axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                      color: [[0.077, '#ff4500'],[0.923, '#48b'],[1, '#ff4500']],
                      width: 2
                  }
              },
              axisTick: {            // 坐标轴小标记
                  splitNumber: 10,   // 每份split细分多少段
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
              data:[{value: 50, name: 'Y轴坐标'}]
          }
      ]
  };

  this.ZZ = {
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
            min:-360,
            max:360,
            splitNumber: 6,       // 分割段数，默认为5
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.077, '#ff4500'],[0.923, '#48b'],[1, '#ff4500']],
                    width: 2
                }
            },
            axisTick: {            // 坐标轴小标记
                splitNumber: 10,   // 每份split细分多少段
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
            data:[{value:this.Z, name: 'Z轴坐标'}]
        }
    ]
};

    this.Data24 = {
      tooltip : {
          formatter: "{a} <br/>{c} {b}"
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
              name:'速度',
              type:'gauge',
              radius:'80%',
              center : ['50%', '68%'],    // 默认全局居中
              z: 3,
              min:0,
              max:100,
              splitNumber:5,
              axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                      width: 2,
                      fontSize:5
                  }
              },
              axisTick: {            // 坐标轴小标记
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
                  length :8,         // 属性length控制线长
                  lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                      color: 'auto'
                  }
              },
              title : {
                  textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      fontWeight: 'bolder',
                      fontSize: 2,
                      fontStyle: 'italic'
                  }
              },
              detail : {
                  textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      fontWeight: 'bolder',
                      fontSize:13
                  }
              },
              data:[{value: 40}]
          },
          {
              name:'转速',
              type:'gauge',
              center : ['15%', '68%'],    // 默认全局居中
              radius : '55%',
              min:0,
              max:100,
  
              startAngle:180,
              endAngle:0,
              splitNumber:2,
              axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                      width: 2,
                      fontSize:5
                  }
              },
              axisTick: {            // 坐标轴小标记
                  length :6,        // 属性length控制线长
                  lineStyle: {       // 属性lineStyle控制线条样式
                      color: 'auto',
                      fontSize:5
                  }
              },
              splitLine: {           // 分隔线
                  length :4,         // 属性length控制线长
                  lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                      color: 'auto'
                  }
              },
              pointer: {
                  width:5
              },
              title : {
                  offsetCenter: [0, '-30%'],       // x, y，单位px
              },
              detail : {
                  textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      fontWeight: 'bolder',
                      fontSize: 8
                  }
              },
              data:[{value: 1.5}]
          },
  
         {
              name:'转速',
              type:'gauge',
              center : ['85%', '68%'],    // 默认全局居中
              radius : '55%',
              min:0,
              max:100,
  
              startAngle:180,
              endAngle:0,
              splitNumber:2,
              axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                      width: 2
                  }
              },
              axisTick: {            // 坐标轴小标记
                  length :4,        // 属性length控制线长
                  lineStyle: {       // 属性lineStyle控制线条样式
                      color: 'auto'
                  }
              },
              splitLine: {           // 分隔线
                  length :6,         // 属性length控制线长
                  lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                      color: 'auto'
                  }
              },
              pointer: {
                  width:5
              },
              title : {
                  offsetCenter: [0, '-30%'],       // x, y，单位px
              },
              detail : {
                  textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      fontWeight: 'bolder',
                      fontSize:6
                  }
              },
              data:[{value: 1.5}]
          },
  
      ]
  };

    this.EChart = echarts.init(ctelementA);
    this.EChart.setOption(this.JD1);

    this.EChart2 = echarts.init(ctelementB);
    this.EChart2.setOption(this.JD2);

    this.EChart3 = echarts.init(ctelementC);
    this.EChart3.setOption(this.JD3);
    
    this.EChart4 = echarts.init(ctelementX);
    this.EChart4.setOption(this.JD4);

    this.EChart5 = echarts.init(ctelementY);
    this.EChart5.setOption(this.JD5);

    this.EChart6 = echarts.init(ctelementZ);
    this.EChart6.setOption(this.JD6);

    this.EChartA = echarts.init(ctelement1);
    this.EChartA.setOption(this.AA);

    this.EChartB = echarts.init(ctelement2);
    this.EChartB.setOption(this.BB);

    this.EChartC = echarts.init(ctelement3);
    this.EChartC.setOption(this.CC),

    this.EChartX = echarts.init(ctelement4);
    this.EChartX.setOption(this.XX);

    this.EChartY = echarts.init(ctelement5);
    this.EChartY.setOption(this.YY);
    
    this.EChartZ = echarts.init(ctelement6);
    this.EChartZ.setOption(this.ZZ);

    this.EChartD = echarts.init(ctelement24);
    this.EChartD.setOption(this.Data24);
     
    var _that = this;
    // console.log('是什么:',this.EChart.echarts)
    var url="http://219.143.186.88:8888/ionicDa/ionicRobot1/?callback=JSONP_CALLBACK";
    // var url="http://192.168.12.77:8888/ionicDa/ionicRobot1/?callback=JSONP_CALLBACK";
    this.interval = setInterval(()=>{
     
    
    
    this.jsonp.get(url)
    .subscribe(
      function(data){
        var data1 = data['_body'];  //获取数据
        _that.coordinatesA = data1['a'];  //数字类实时数据
        _that.coordinatesB = data1['b'];
        _that.coordinatesC = data1['c'];
        _that.coordinatesX = data1['x'];
        _that.coordinatesY = data1['y'];
        _that.coordinatesZ = data1['z'];
        _that.angle1 = data1['jd1'];
        _that.angle2 = data1['jd1'];
        _that.angle3 = data1['jd1'];
        _that.angle4 = data1['jd1'];
        _that.angle5 = data1['jd1'];
        _that.angle6 = data1['jd1'];
        console.log(5555)
        // console.log()

        _that.JD1.series[0].data[0].value= data1['jd1'];  //图表类动态数据
        console.log(66666)
        _that.JD2.series[0].data[0].value= data1['jd2'];
        _that.JD3.series[0].data[0].value= data1['jd3'];
        _that.JD4.series[0].data[0].value= data1['jd4'];
        _that.JD5.series[0].data[0].value= data1['jd5'];
        _that.JD6.series[0].data[0].value= data1['jd6'];
        _that.AA.series[0].data[0].value= data1['a'];
        _that.BB.series[0].data[0].value= data1['b'];
        _that.CC.series[0].data[0].value= data1['c'];
        _that.XX.series[0].data[0].value= data1['x'];
        _that.YY.series[0].data[0].value= data1['y'];
        _that.ZZ.series[0].data[0].value= data1['z'];
        _that.EChart.setOption(_that.JD1);
        _that.EChart2.setOption(_that.JD2);
        _that.EChart3.setOption(_that.JD3);
        _that.EChart4.setOption(_that.JD4);
        _that.EChart5.setOption(_that.JD5);
        _that.EChart6.setOption(_that.JD6);
        _that.EChartA.setOption(_that.AA);
        _that.EChartB.setOption(_that.BB);
        _that.EChartC.setOption(_that.CC);
        _that.EChartX.setOption(_that.XX);
        _that.EChartY.setOption(_that.YY);
        _that.EChartZ.setOption(_that.ZZ);
        
        
      })
    },1000)
    }

}
