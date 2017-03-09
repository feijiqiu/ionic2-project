/**
 * Created by 非丶季秋 on 2017-2-22.
 */
import { Injectable } from '@angular/core';

import { Http, Headers,RequestOptions,URLSearchParams} from '@angular/http';
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
  linkUrl:String;
  uRLSearchParams:any;
  constructor(public http:Http, public postHeaderParam:RequestOptions){
    let postHeader = new  Headers();
   /* postHeader.append("Accept", 'application/json');*/
    postHeader.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    console.log(postHeader);
    this.postHeaderParam.headers = postHeader;
    this.isRefresh = '初始化';
    this.linkUrl = '';
    this.uRLSearchParams = new URLSearchParams();
  }
  // 测试 http get requst link
  testHttpGet(){
    return new Promise((resolve,reject) => {
        this.http.get('http://mpassport.pinhui002.cc/api/login').subscribe(res => {
            console.log('====provider success========');
            console.log(res.json());
            resolve();
          }, err =>{
            console.log('======provider err======');
            console.log(err.json().subjects);
            reject();
          }
        )
    })
  };
  // 测试 http post requst link
  testHttpPost(req_data){
    console.log(typeof req_data);
    console.log(JSON.stringify(req_data));
    return new Promise((resolve,reject) => {
      this.http.post(
        'http://localhost:8080/project-springMVC-hib/test/deptList',
        this.postParamFormat('deptList',req_data),
        this.postHeaderParam
      ).subscribe(res => {
        console.log(res);
          console.log('====provider success========');
          console.log(res.json());
          resolve();
        }, err =>{
          console.log('======provider err======');
          console.log(err.json().subjects);
          reject();
        }
      )
    })
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
  postParamFormat(action,param){
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('action', action);
    urlSearchParams.append('params', JSON.stringify(param));
    let body = urlSearchParams.toString();
    return body;
  }

  param(obj) {
  var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

  for (name in obj) {
    value = obj[name];

    if (value instanceof Array) {
      for (i = 0; i < value.length; ++i) {
        subValue = value[i];
        fullSubName = name + '[' + i + ']';
        innerObj = {};
        innerObj[fullSubName] = subValue;
        query += this.param(innerObj) + '&';
      }
    }
    else if (value instanceof Object) {
      for (subName in value) {
        subValue = value[subName];
        fullSubName = name + '[' + subName + ']';
        innerObj = {};
        innerObj[fullSubName] = subValue;
        query += this.param(innerObj) + '&';
      }
    }
    else if (value !== undefined && value !== null)
      query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
  }
  return query.length ? query.substr(0, query.length - 1) : query;
};

}
