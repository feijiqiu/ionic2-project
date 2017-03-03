import { Component,Injectable,ViewChild} from '@angular/core';
import { Platform, ActionSheetController,NavController,Content} from 'ionic-angular';
import { AboutChildPage } from '../about-detail/movie-detail'
//每个组件都以@Component 装饰器 函数开始
//Every component begins with an @Component decorator function that takes a metadata object
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
@Injectable()
export class AboutPage {
  @ViewChild(Content) content: Content;
  //note 在构造函数参数中使用public是一种简写形式，它将自动创建具有该名称的属性
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ) { }

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
}
