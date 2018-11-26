import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule, JsonpModule } from '@angular/http';

//ionic 打包app以后配置启动画面，以及导航条的服务(不用管)
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//引入横屏插件
import { ScreenOrientation } from '@ionic-native/screen-orientation';


//引入根组件
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { OtherPage } from '../pages/other/other';
import { HuatecPage } from '../pages/huatec/huatec';
import { LogPage } from '../pages/log/log';
import { ScadaPage } from '../pages/scada/scada';
import { Scada2Page } from '../pages/scada2/scada2';
import { ScadahPage } from '../pages/scadah/scadah';
import { JiqirenhPage } from '../pages/jiqirenh/jiqirenh';
//scada平台页面
import { Scada11Page } from '../pages/scadaPages/scada11/scada11';
import { LampPage } from '../pages/scadaPages/lamp/lamp';
import { ScadahomePage } from '../pages/scadaPages/scadahome/scadahome';
import { FrequencyPage } from '../pages/scadaPages/frequency/frequency';
import { ServoPage } from '../pages/scadaPages/servo/servo';


@NgModule({
  declarations: [ /*声明组件*/
    MyApp,
    HomePage,
    TabsPage,
    AboutPage,
    ContactPage,
    OtherPage,
    HuatecPage,
    LogPage,
    ScadaPage,
    Scada2Page,
    ScadahPage,
    JiqirenhPage,
    //scada页面
    Scada11Page,
    LampPage,
    ScadahomePage,
    FrequencyPage,
    ServoPage 

  ],
  imports: [/* 引入模块 依赖的模块 */
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp], /*启动的模块 */
  entryComponents: [ /* 配置不会在模板中的组件 */
    MyApp,
    HomePage,
    TabsPage,
    AboutPage,
    ContactPage,
    OtherPage,
    HuatecPage,
    LogPage,
    ScadaPage,
    Scada2Page,
    ScadahPage,
    JiqirenhPage,
    //scada页面
    Scada11Page,
    LampPage,
    ScadahomePage,
    FrequencyPage,
    ServoPage

  ],
  providers: [/* 配置服务 */
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
