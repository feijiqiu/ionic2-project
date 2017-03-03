import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutModule } from '../pages/about/about.module';
import { TabModule } from '../pages/tabs/tabs.module';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
/*import { TabsPage } from '../pages/tabs/tabs';*/
import { TestPage } from '../pages/test/test';
//note 一个Module指的是使用@NgModule修饰的class。
// @NgModule利用一个元数据对象来告诉Angular如何去编译和运行代码。
// 一个模块内部可以包含组件、指令、管道，并且可以将它们的访问权限声明为公有，以使外部模块的组件可以访问和使用到它们。
//模块是用来组织应用的，通过模块机制外部类库可以很方便的扩展应用，
// Rc5之后，Angular2将许多常用功能都分配到一个个的模块中，如:FormModule、HttpModule、RouterModule。
@NgModule({
  //note declarations：模块内部  Components/Directives/Pipes的列表，声明一下这个模块内部成员
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TestPage
  ],
  //note 导入其他module，其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用。
  // 比如导入CommonModule后就可以使用NgIf、NgFor等指令。
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios',
      //Whether to hide the tabs on child pages or not. If true it will not show the tabs on child pages.
      tabsHideOnSubPages:true // not --- 值不能为 字符串
      /*platforms: {
        ios: {
          tabsPlacement: 'top',
        }
      }*/
    }, {}),
    TabModule,
    AboutModule
  ],
  //note 通常是app启动的根组件，一般只有一个component。
  // bootstrap中的组件会自动被放入到entryComponents中。
  bootstrap: [IonicApp],
  //note  不会再模板中被引用到的组件。
  // 这个属性一般情况下只有ng自己使用，一般是bootstrap组件或者路由组件，ng会自动把bootstrap、路由组件放入其中。
  // 除非不通过路由动态将component加入到dom中，否则不会用到这个属性。
  // 每个Angular2的应用都至少有一个模块即跟模块。
  entryComponents: [
    MyApp,
    /*AboutPage,
    AboutChildPage,//note ---- child_1 添加一个新的子页面必须*/
    ContactPage,
    HomePage,
    /*TabsPage,*/
    TestPage
  ],
  //note 指定应用程序的根级别需要使用的service。
  // （Angular2中没有模块级别的service，所有在NgModule中声明的Provider都是注册在根级别的Dependency Injector中）
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
//note 用来控制将哪些内部成员暴露给外部使用。
//导入一个module并不意味着会自动导入这个module内部导入的module所暴露出的公共成员。
//除非导入的这个module把它内部导入的module写到exports中。
export class AppModule {}
