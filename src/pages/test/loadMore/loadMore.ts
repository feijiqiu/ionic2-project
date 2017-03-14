import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
@Component({
  selector: 'loadMore',
  /*
   selector参数是一个 css 选择器， 这里表示选择 html 标签为 my-app的元素。 Angular 将会在这个元素里面展示AppComponent 组件
   */
  templateUrl: 'loadMore.html'
})
export class LoadMorePage {
  dataFinish:boolean;
  items:Array<any>;
  isLoadMore:boolean;
  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController) {
    this.menuCtrl.swipeEnable(false);
    this.dataFinish = false;
    this.isLoadMore = true;
    this.items = [];
    for (let i = 0; i < 30; i++) {
      this.items.push(i);
    }
  }
  // note  test load more --------------------

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      if(this.items.length>90){
        this.isLoadMore = false;
      }
      for (let i = 0; i < 30; i++) {
        this.items.push(i);
      }
      console.log('add list more');
      infiniteScroll.complete();
    }, 500);
  }

  ///_-----------
  initPageData(){

  }
  //Observable to be subscribed to when a component is loaded.
  ionViewDidLoad() {

  }
  ionViewWillLeave() {
  }
}
