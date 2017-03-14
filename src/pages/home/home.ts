import { Component ,ViewChild } from '@angular/core';

import { NavController ,Slides} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  slideDataList:Array<any>;
  dataFinish:Boolean;
  constructor(public navCtrl: NavController) {
    this.dataFinish =false;
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

  ionViewDidLoad() {
    /*setTimeout(() => {
      this.slides.stopAutoplay();// 只有当打开 [autoplay]  = 1000 起效
      setTimeout(() => {
        this.slides.startAutoplay();// 只有当打开 [autoplay]  = 1000 且 手动this.slides.stopAutoplay();才有效
      },3000);
    },3000);*/
    this.initPageData();
  }

}
