import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { MyModalModal } from './myModal/myModal'
@Component({
  selector: 'useModal',
  templateUrl: 'useModal.html'
})
export class UseModalPage {
  dataFinish:boolean;
  constructor(public modalCtrl: ModalController) {
    this.dataFinish = false;
  }

  /*
     component :	object
       The Modal view
     data :	object
        Any data to pass to the Modal view
     opts :	object
        Modal options
           showBackdrop	: boolean
              Whether to show the backdrop. Default true.
           enableBackdropDismiss	: boolean
              Whether the popover should be dismissed by tapping the backdrop. Default true.
   */

  openModal(){
    let profileModal = this.modalCtrl.create(MyModalModal, { name: '传参数。。。' });
    /*
      promiss to  after dismiss modal
     */
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    // open the modal that created by profileModal
    profileModal.present();
  }


  ionViewDidLoad() {

  }
  ionViewWillLeave() {
  }
}
