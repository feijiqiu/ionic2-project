/**
 * Created by 非丶季秋 on 2017-2-22.
 */
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
  /*
  Generated this class to ask for serve's interfaces

  knowledge bases :
    Dependency Injection

    rxjs 流
  */
/*
  if generate class used DI
 */
@Injectable()
export class AboutData {
  isRefresh:String;
  data:any;

  constructor(public http:Http){
    this.isRefresh = '初始化'
  }

  getAboutList(_id){
    console.log(_id);
    return 'tiantian'
  }
  changeIsRefresh(_d){
    this.isRefresh = _d;
  }
  getIsRefresh(){
    return  this.isRefresh;
  }
}
