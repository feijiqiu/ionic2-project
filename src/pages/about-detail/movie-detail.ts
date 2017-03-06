import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { AboutData } from '../../providers/aboutData'
@Component({
  selector: 'page-movie-detail',
  /*
   selector参数是一个 css 选择器， 这里表示选择 html 标签为 my-app的元素。 Angular 将会在这个元素里面展示AppComponent 组件
   */
  templateUrl: 'movie-detail.html'
})
export class AboutChildPage {
  id: String;
  componentName:String;
  movieInfo: any;
  hasErr: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menuCtrl: MenuController, public aboutData: AboutData) {
    this.id = this.navParams.get('id');
    this.menuCtrl.swipeEnable(false);
    this.componentName = 'AboutChildPage1 :::::';
  }
  //Observable to be subscribed to when a component is loaded.
  ionViewDidLoad() {
    console.log(this.componentName + 'Observable to be subscribed to when a component is about to be loaded.');
    console.log(this.componentName + 'ionViewDidLoad');
  }
  ionViewWillLeave() {
    console.log(this.componentName +'Observable to be subscribed to when a component is about to be unloaded and destroyed.');
    console.log(this.componentName + 'ionViewWillLeave');
    console.log('isRefresh :: ====' + this.aboutData.getIsRefresh());
    console.log('do update isRefresh' + this.aboutData.changeIsRefresh('天天'));
  }
  initData() {
    console.log(this.aboutData.getAboutList(this.id));
    console.log(parent);
    //return
  }
  goToBack(){
    console.log('点击');
      //  this.navCtrl.pop();
  }
}
