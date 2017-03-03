import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-movie-detail',
  /*
   selector参数是一个 css 选择器， 这里表示选择 html 标签为 my-app的元素。 Angular 将会在这个元素里面展示AppComponent 组件
   */
  templateUrl: 'movie-detail.html'
})
export class AboutChildPage {
  id: String;
  movieInfo: any;
  hasErr: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menuCtrl: MenuController, public toastCtrl: ToastController) {
    this.id = this.navParams.get('id');
    this.menuCtrl.swipeEnable(false);
  }
}
