import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
@Component({
  selector: 'myModal',
  templateUrl: 'myModal.html'
})
export class MyModalModal {
  dataFinish:boolean;
  data:any;
  constructor(public navParams: NavParams,
              public modalCtrl: ViewController) {
   this.dataFinish = false;
   this.data = navParams;
   console.log(navParams);
  }

  closeThis(){
    let afterCloseSendData = {
      name:'after close MyModalModal',
      detail:'关闭modal 的返回'
    };
    this.modalCtrl.dismiss(afterCloseSendData);
  }

  initPageData(){

  }
  //Observable to be subscribed to when a component is loaded.
  ionViewDidLoad() {

  }
  ionViewWillLeave() {
  }
}
