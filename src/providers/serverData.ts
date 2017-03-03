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
export class ServerData {

  data:any;

  constructor(public http:Http){

  }

  getHomePicList(){
    return new Promise((resolve,reject) =>{
      //this.http.post()

    })
  }

}
