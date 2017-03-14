import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoadMorePage } from './loadMore/loadMore'

//每个组件都以@Component 装饰器 函数开始
//Every component begins with an @Component decorator function that takes a metadata object
@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {
  dataFinish:boolean = false;
  //note 在构造函数参数中使用public是一种简写形式，它将自动创建具有该名称的属性
  constructor(public navCtrl: NavController) {

  }
  goToTestLoadMore(){
    this.navCtrl.push(LoadMorePage);
  }
}
