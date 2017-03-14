import { Component,ViewChild} from '@angular/core';
import { Platform, ActionSheetController,Slides, NavController,Content} from 'ionic-angular';
import { AboutChildPage } from '../about-detail/movie-detail'
import { AboutData } from '../../providers/aboutData'
//每个组件都以@Component 装饰器 函数开始
//Every component begins with an @Component decorator function that takes a metadata object
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Content) content: Content;
  @ViewChild(Slides) slides: Slides;
  componentName:String;
  dataFinish:boolean;
  slideDataList:Array<any>;
  //note 在构造函数参数中使用public是一种简写形式，它将自动创建具有该名称的属性
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public aboutData: AboutData
  ) {
    this.componentName = 'AboutPage --------- ';
    this.dataFinish = false;
  }
  ionViewWillEnter(){
    // note 与 ionViewWillLeave this.slides.stopAutoplay(); 配合 防止页面离开 slide 轮播失效问题
    if(this.dataFinish){
      this.slides.startAutoplay();// 只有当打开 [autoplay]  = 1000 且 手动this.slides.stopAutoplay();才有效
    }
    console.log('isRefresh :: ====' + this.aboutData.getIsRefresh());
    console.log(this.componentName + 'Observable to be subscribed to when a component has fully become the active component.');
    console.log(this.componentName + 'ionViewWillEnter');
    console.log('isRefresh :: ====' + this.aboutData.getIsRefresh());
  }
  ionViewDidLoad() {
    this.slideDataList = [
      'http://img.pinhui001.com/group1/M00/00/10/CgEILliizZuAQnBLAALdVVU7DHU450.jpg',
      'http://img.pinhui001.com/group1/M00/00/20/CgEILVizyASAAJAQAAEoFICcgys336.jpg',
      'http://img.pinhui001.com/group1/M00/00/20/CgEILVizxuCASk8sAAQOB6y4-rk654.png',
      'http://img.pinhui001.com/group1/M00/00/10/CgEILliizZuAQnBLAALdVVU7DHU450.jpg',
      'http://img.pinhui001.com/group1/M00/00/10/CgEILliizZuAQnBLAALdVVU7DHU450.jpg',
      'http://img.pinhui001.com/group1/M00/00/20/CgEILVizyASAAJAQAAEoFICcgys336.jpg',
      'http://img.pinhui001.com/group1/M00/00/10/CgEILliizZuAQnBLAALdVVU7DHU450.jpg',
      'http://img.pinhui001.com/group1/M00/00/10/CgEILliizZuAQnBLAALdVVU7DHU450.jpg'
    ];
    this.dataFinish =true;
    console.log(this.componentName + 'Observable to be subscribed to when a component is about to be loaded.');
    console.log(this.componentName + 'ionViewDidLoad');
  }
  ionViewWillLeave() {
    console.log(this.componentName +'Observable to be subscribed to when a component is about to be unloaded and destroyed.');
    console.log(this.componentName + 'ionViewWillLeave');
    console.log('isRefresh :: ====' + this.aboutData.getIsRefresh());
    this.slides.stopAutoplay();// 只有当打开 [autoplay]  = 1000 起效

  }
  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheet-ios',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  goToChildPage(id){
    this.navCtrl.push(AboutChildPage, { id: id });
  }
  goToTestLoadMore(){
    /*this.navCtrl.push(TestLoadMore);*/
  }
  goToBack(){
   console.log(111);
  }



}
