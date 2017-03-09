import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams,Slides, MenuController } from 'ionic-angular';
import { AboutData } from '../../providers/aboutData'
@Component({
  selector: 'page-movie-detail',
  /*
   selector参数是一个 css 选择器， 这里表示选择 html 标签为 my-app的元素。 Angular 将会在这个元素里面展示AppComponent 组件
   */
  templateUrl: 'movie-detail.html'
})
export class AboutChildPage {
  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    //this.slides.slideTo(2, 500);
  }
  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex == 1){
      console.log("Current index is", currentIndex);
    }

  }
  id: String;
  componentName:String;
  slideDataList:Array<any>;
  movieInfo: any;
  hasErr: any;
  req_data:any = Object;
  dataFinish:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menuCtrl: MenuController, public aboutData: AboutData) {
    this.id = this.navParams.get('id');
    this.menuCtrl.swipeEnable(false);
    this.componentName = 'AboutChildPage1 :::::';
    this.dataFinish = false;
    this.req_data = {
      username : '13700000002',
      password : '87654321',
      terminal : '3',
      platform : '4',
      version : '1',
      user_ip : '127.0.1.1',
      sign : 'D0A5D138281EB35738DB0175EE0A4A76',

      deptId:1,
      deptNo:'no127.0.1.1',
      deptName: 'nameD0A5D138281EB35738DB0175EE0A4A76',
      location: 'llllllD0A5D138281EB35738DB0175EE0A4A76',
    };
  }

  initPageData(){
    setTimeout(() => {

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
     // this.slides.pager = true;
     // this.slides.loop = true;
      /*this.slides.update();
      this.slides.startAutoplay();*/


    },1000);

  }
  //Observable to be subscribed to when a component is loaded.
  ionViewDidLoad() {
    setTimeout(() => {
      console.log(1111);
      this.slides.stopAutoplay();// 只有当打开 [autoplay]  = 1000 起效
      setTimeout(() => {
        console.log(22222);
        this.slides.startAutoplay();// 只有当打开 [autoplay]  = 1000 且 手动this.slides.stopAutoplay();才有效
      },3000);
    },3000);
    this.initPageData();
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
  testHttpGet(){
    this.aboutData.testHttpGet().then(res=>{
      console.log('controller：res ....');
      console.log(console.log(res));
    },err=>{
      console.log('controller：err ....');
      console.log(err)
    });
  }
  testHttpPost(){
    this.aboutData.testHttpPost(this.req_data).then(res=>{
      console.log('controller：res ....');
      console.log(console.log(res));
    },err=>{
      console.log('controller：err ....');
      console.log(err)
    });
  }


}
