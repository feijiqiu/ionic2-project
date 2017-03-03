import { Component,ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { TestPage } from '../test/test'
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('myTabs') tabRef: Tabs;

 /* ionViewDidEnter() {
    this.tabRef.select(2);
  }*/

  // this tells the tabs component which Pages
  // should be each tab's root Page
  homeRoot: any = HomePage;
  aboutRoot: any = AboutPage;
  contentRoot: any = ContactPage;
  testRoot:any = TestPage;

  constructor() {

  }
}
