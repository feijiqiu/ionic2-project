import { NgModule} from '@angular/core';
import { IonicModule} from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { AboutChildPage } from '../about-detail/movie-detail'
import { AboutPage } from './about'

import { AboutData } from '../../providers/aboutData'
//note 一个Module指的是使用@NgModule修饰的class。
// @NgModule利用一个元数据对象来告诉Angular如何去编译和运行代码。
// 一个模块内部可以包含组件、指令、管道，并且可以将它们的访问权限声明为公有，以使外部模块的组件可以访问和使用到它们。
//模块是用来组织应用的，通过模块机制外部类库可以很方便的扩展应用，
// Rc5之后，Angular2将许多常用功能都分配到一个个的模块中，如:FormModule、HttpModule、RouterModule。
@NgModule({
  //imports：导入其他module
  //其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用。
  //比如导入CommonModule后就可以使用NgIf、NgFor等指令。
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  //note declarations：模块内部
  //Components/Directives/Pipes的列表，声明一下这个模块内部成员
  declarations: [
    AboutChildPage,   //note ---- child_1 添加一个新的子页面必须
    AboutPage,
  ],

 /* bootstrap: [IonicApp],*/
  //note  不会再模板中被引用到的组件。
  // 这个属性一般情况下只有ng自己使用，一般是bootstrap组件或者路由组件，ng会自动把bootstrap、路由组件放入其中。
  // 除非不通过路由动态将component加入到dom中，否则不会用到这个属性。
  // 每个Angular2的应用都至少有一个模块即跟模块。
  entryComponents: [
    AboutChildPage,//note ---- child_1 添加一个新的子页面必须
    AboutPage,
  ],
  //note 指定应用程序的根级别需要使用的service。
  // （Angular2中没有模块级别的service，所有在NgModule中声明的Provider都是注册在根级别的Dependency Injector中）
  providers: [AboutData],
  //用来控制将哪些内部成员暴露给外部使用。
  //导入一个module并不意味着会自动导入这个module内部导入的module所暴露出的公共成员。
  //除非导入的这个module把它内部导入的module写到exports中。
  exports:[IonicModule]
})
//note 用来控制将哪些内部成员暴露给外部使用。
//导入一个module并不意味着会自动导入这个module内部导入的module所暴露出的公共成员。
//除非导入的这个module把它内部导入的module写到exports中。
export class AboutModule {}
