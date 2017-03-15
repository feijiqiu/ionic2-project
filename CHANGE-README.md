Ionic 2 App Base
=====================

This is the base template for Ionic 2 starter apps.

## Using this project

You'll need the Ionic CLI with support for v2 apps:

```bash
$ npm install -g ionic
```

Then run:

```bash
$ ionic start myApp
```

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/docs/v2/getting-started/) page.
# ionic2-project
模块 细分 （抽离 tabs 模块 、about模块）
//TODO
注意： about 模块 抽离的 前提是  tabs模块已经 抽离  ，否则报错 。具体原因未解决 待补 

- 1.利用 privade 数据  以及 进入 视图 每次都执行的方法 实现 下级 控件 返回选择刷新数据 （可用于 数据添加，返回列表自动刷新功能实现）
- 2.post 请求后台 测试接口并 使后端接收到相应的参数 
- 3、测试上拉刷新刷新功能。
- -  测试块模块化抽离
- 4、下拉刷新
- -  modal 简单操作
