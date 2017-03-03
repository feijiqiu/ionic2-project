/**
 * Check out https://googlechrome.github.io/sw-toolbox/docs/master/index.html for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.cacheFirst);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;


/*
 <span style="font-family: Arial, Helvetica, sans-serif; background-color: rgb(255, 255, 255);">
 在用ionic框架时，往往在切换tab的时候出现短暂的白屏闪一下，非常影响用户体验，这个问题纠结了好久也没有找到解决办法，后来在ionic的bug issue中看见了关于这个的issue，分享给大家 。 里面提到一种解决办法，亲自试验有效，但是却不是一个很合适的办法：
 </span>
 $timeout(function() {
 ionic.requestAnimationFrame(onReflow);
 });
 ionic.requestAnimationFrame(onReflow);

 参考issue: https://github.com/driftyco/ionic/issues/3907
 http://blog.csdn.net/dounainaicsdn/article/details/51136779
 */
