"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MovieDetailPage = (function () {
    function MovieDetailPage(navCtrl, navParams, data, menuCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.id = this.navParams.get('id');
        this.menuCtrl.swipeEnable(false);
    }
    MovieDetailPage.prototype.ionViewDidLoad = function () {
        this.initData();
    };
    MovieDetailPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.swipeEnable(true);
    };
    MovieDetailPage.prototype.initData = function () {
        var _this = this;
        this.hasErr = null;
        this.data.getMovieDetail(this.id).then(function (res) {
            _this.movieInfo = res;
        }, function (err) {
            _this.hasErr = err;
        });
    };
    MovieDetailPage.prototype.shareMovie = function (type, movie) {
        var that = this;
        switch (type) {
            case 'QQ':
                var QQ = {
                    url: movie.share_url,
                    title: movie.title,
                    description: "来自Ion2--基于Ionic2的资讯类APP",
                    imageUrl: movie.images.large,
                    appName: "Ion2"
                };
                YCQQ.shareToQQ(function () {
                    that.showToast('分享成功');
                }, function (failReason) {
                    that.showToast('分享失败');
                }, QQ);
                break;
            case 'Qzone':
                var Qzone = {
                    url: movie.share_url,
                    title: movie.title,
                    description: "来自Ion2--基于Ionic2的资讯类APP",
                    imageUrl: [movie.images.large],
                    appName: "Ion2"
                };
                YCQQ.shareToQzone(function () {
                    that.showToast('分享成功');
                }, function (failReason) {
                    that.showToast('分享失败');
                }, Qzone);
                break;
            case 'weixin':
                Wechat.share({
                    message: {
                        title: movie.title,
                        description: "来自Ion2--基于Ionic2的资讯类APP",
                        thumb: movie.images.large,
                        mediaTagName: "TEST-TAG-001",
                        messageExt: "来自Ion2--基于Ionic2的资讯类APP",
                        messageAction: "<action>dotalist</action>",
                        media: {
                            type: Wechat.Type.WEBPAGE,
                            webpageUrl: movie.share_url
                        }
                    },
                    scene: Wechat.Scene.SESSION
                }, function () {
                    that.showToast('分享成功');
                }, function (failReason) {
                    that.showToast('分享失败');
                });
                break;
            case 'friends':
                Wechat.share({
                    message: {
                        title: movie.title,
                        description: "来自Ion2--基于Ionic2的资讯类APP",
                        thumb: movie.images.large,
                        mediaTagName: "TEST-TAG-001",
                        messageExt: "来自Ion2--基于Ionic2的资讯类APP",
                        messageAction: "<action>dotalist</action>",
                        media: {
                            type: Wechat.Type.WEBPAGE,
                            webpageUrl: movie.share_url
                        }
                    },
                    scene: Wechat.Scene.TIMELINE
                }, function () {
                    that.showToast('分享成功');
                }, function (failReason) {
                    that.showToast('分享失败');
                });
                break;
        }
    };
    MovieDetailPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    MovieDetailPage = __decorate([
        core_1.Component({
            selector: 'page-movie-detail',
            templateUrl: 'movie-detail.html'
        })
    ], MovieDetailPage);
    return MovieDetailPage;
}());
exports.MovieDetailPage = MovieDetailPage;
