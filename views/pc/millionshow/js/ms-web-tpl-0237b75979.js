angular.module("app").run(["$templateCache",function(d){d.put("controllers/app/common/home.html","home.html")}]),angular.module("app").run(["$templateCache",function(d){d.put("controllers/app/layout/main.html","app")}]),angular.module("app").run(["$templateCache",function(d){d.put("controllers/web/houses/info.html","info.html")}]),angular.module("app").run(["$templateCache",function(d){d.put("controllers/web/houses/list.html","list.html")}]),angular.module("app").run(["$templateCache",function(d){d.put("controllers/web/common/aboutus.html",'<div class="ms-comwidth clearfix"><div class="margin-tb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</div><div class="margin-tb-20 clearfix"><video id="ts-video-aboutus" class="video-js vjs-default-skin" controls="" preload="auto" width="500" height="250" poster="http://itlove.wang/views/pc/millionshow/images/examples/things.png" vjs-video=""><source ng-src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4"><source src="http://vjs.zencdn.net/v/oceans.webm" type="video/webm"><source src="http://vjs.zencdn.net/v/oceans.ogv" type="video/ogg"><p class="vjs-no-js">请升级您的浏览器来支持HTML5视频播放 <a href="http://www.google.cn/intl/zh-CN/chrome/browser/" target="_blank">升级浏览器</a></p></video></div><div class="margin-tb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</div><div class="margin-tb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</div></div>')}]),angular.module("app").run(["$templateCache",function(d){d.put("controllers/web/common/home.html",'<div class="ms-home-slider" id="md-home-slider" ms-fancybox="" ng-mouseenter="vm.vars.isSilderArrowShow=true" ng-mouseleave="vm.vars.isSilderArrowShow=false"><div class="bd"><ul><li class="clearfix"><dl><dd>d</dd><dd>d</dd><dd>d</dd><dd>d</dd><dd>d</dd><dd>d</dd><dd>d</dd><dd>d</dd><dd>d</dd><dd>d</dd><dd>d</dd><dd>d</dd><dd>d</dd><dd>d</dd><dd>d</dd></dl></li><li class="clearfix"><dl><dd><a href="http://ac-mhke0kuv.clouddn.com/bNXvtnLM6dSJ0zxnDwCeaJtm0a2aonkkqLDQ02AI.png?imageView/2/w/800/h/600/q/80/format/png" class="fancybox" rel="fancybox-img-a" title="ssss"><img src="http://itlove.wang/views/pc/millionshow/images/examples/things.png" alt=""></a></dd><dd>a</dd><dd>a</dd><dd>a</dd><dd>a</dd><dd>a</dd><dd>a</dd><dd>a</dd><dd>a</dd><dd>a</dd><dd>a</dd><dd>a</dd><dd>a</dd><dd>a</dd><dd>a</dd></dl></li><li class="clearfix"><dl><dd>b</dd><dd>b</dd><dd>b</dd><dd>b</dd><dd>b</dd><dd>b</dd><dd>b</dd><dd>b</dd><dd>b</dd><dd>b</dd><dd>b</dd><dd>b</dd><dd>b</dd><dd>b</dd><dd>b</dd></dl></li><li class="clearfix"><dl><dd>c</dd><dd>c</dd><dd>c</dd><dd>c</dd><dd>c</dd><dd>c</dd><dd>c</dd><dd>c</dd><dd>c</dd><dd>c</dd><dd>c</dd><dd>c</dd><dd>c</dd><dd>c</dd><dd>c</dd></dl></li></ul></div><div class="hd"><ul></ul></div><div class="pnBtn prev"><span class="blackBg"></span> <a href="javascript:;" class="arrow" ng-show="vm.vars.isSilderArrowShow"></a></div><div class="pnBtn next"><span class="blackBg"></span> <a href="javascript:;" class="arrow" ng-show="vm.vars.isSilderArrowShow"></a></div></div>')}]),angular.module("app").run(["$templateCache",function(d){d.put("controllers/web/layout/foot.html",'<div class="ms-web-layout-footer" translate="">FOOTER</div>')}]),angular.module("app").run(["$templateCache",function(d){d.put("controllers/web/layout/head.html",'<div class="ms-web-header"><div class="ms-comwidth clearfix"><div class="ms-web-logo pull-left">Million Show</div><ul class="ms-web-menu ms-web-menu-horizontal ms-web-menu-dark"><li class="ms-web-menu-item"><a ui-sref-active="active" ui-sref="web.home" translate="">HOME</a></li><li class="ms-web-menu-item"><a ui-sref-active="active" ui-sref="web.houses" translate="">HOUSE</a></li><li class="ms-web-menu-item"><a ui-sref-active="active" ui-sref="web.aboutus" translate="">ABOUTUS</a></li></ul><div class="ms-web-user pull-right"><a href="javascript:;" ng-click="vm.fn.changeLanguage()"><i class="fa fa-language mr-5"></i><span translate="">CHANGE_LANGUAGE</span></a></div></div></div>')}]),angular.module("app").run(["$templateCache",function(d){d.put("controllers/web/layout/main.html",'<web-layout-head></web-layout-head><div ui-view="web" class="ms-main-warp-animation"></div><web-layout-foot></web-layout-foot>')}]);