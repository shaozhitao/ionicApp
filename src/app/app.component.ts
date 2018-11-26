import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { OtherPage } from '../pages/other/other';
import { HuatecPage } from '../pages/huatec/huatec';
import { ScadaPage } from '../pages/scada/scada';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage:any = TabsPage;
  pages: Array<{title: string, component: any}>;

  public list=[];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,) {
    this.initializeApp();
      this.pages = [
        {title: 'Tabs Page', component: TabsPage},
        {title: 'Other Page', component: OtherPage},
        {title: '华晟智造', component: HuatecPage},
        {title: '实时监控', component: ScadaPage}
      ]

      
    }

    initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page){
    //Reset the content nav to have just this page 
    // We wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  
}

