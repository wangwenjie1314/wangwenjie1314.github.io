
 /* By jasonshan@tencent.com
 * date 2013.9.23
 * v  1.0
 * 适配频道页脚本&(不包含windowsPhone)
 */
//document.domain ="qq.com"
var Jsonp = {
  loadScript: function(url) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
      script.onreadystatechange = function() {
        if (this.readyState == "loaded" || this.readyState == "complete") {
          this.onreadystatechange = null;
          document.body.removeChild(this);
        }
      };
    } else {
      script.onload = function() {
        document.body.removeChild(this);
      };
    }
    script.setAttribute('src', url);
    document.body.appendChild(script);
  },
  encodeParameters: function(arg, parameters) {
    var paras = [];
    for (parameter in parameters) {
      paras.push(escape(parameter) + "=" + escape(parameters[parameter]));
    }
    return paras.length > 0 ? (arg == -1 ? '?' : '&') + paras.join('&') : '';
  },
  request: function(url, param) {
    if (typeof url === 'string') var str = url.indexOf('?');
    this.loadScript(url + this.encodeParameters(str, param));
  }
};
;(function($) {
  $.getScript = function(src, func) {
    var script = document.createElement('script');
    script.async = "async";
    script.charset = "utf-8";
    script.src = src;
    if (func) {
      script.onload = func;
    }
    document.getElementsByTagName("head")[0].appendChild(script);
  }
})($);
/*login*/
// cookie操作
var cooKie = {
    set: function(e, t, n, r, i) {
      typeof n == "undefined" && (n = new Date((new Date).getTime() + 36e5)),
      document.cookie = e + "=" + escape(t) + (n ? "; expires=" + n.toGMTString() : "") + (r ? "; path=" + r : "; path=/") + (i ? ";domain=" + i : "")
    },
    get: function(e) {
      var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
      return t != null ? unescape(t[2]) : null
    },
    clear: function(e, t, n) {
      this.get(e) && (document.cookie = e + "=" + (t ? "; path=" + t : "; path=/") + (n ? "; domain=" + n : "") + ";expires=Fri, 02-Jan-1970 00:00:00 GMT")
    }
};
var get_user_info = function(){
    uin = Number(cooKie.get("uin").substring(1));
    skey = cooKie.get("skey");
    try {
        $.getScript("http://qfwd.qq.com/?uin=" + uin + "&skey=" + skey + "&func=loginAll&refresh=0&ran=" + Math.random(),function(){

        })
    } catch (e) {
        return true;
    };
}
var loginAll = function(obj) {
    if (obj.result == 0) {
        var _nick = "";
        if (obj.nick.length > 8) {
            _nick = obj.nick.substring(0, 7) + "..."
        }else{
            _nick = obj.nick
        };
        $(".foot_user strong").text(_nick);
        $(".foot_logout").show();
        $(".foot_login").hide();
    };
}
var get_sky = function(){
    if (cooKie.get("skey")/* || cooKie.get("lskey")*/) {
        return true;
    }else{
        return false;
    };
};
var Passport ={
    login : function(){
          var theurl = window.location.href;
            window.location.href = "http://ui.ptlogin2.qq.com/cgi-bin/login?appid=636026402&hln_css=http://mat1.gtimg.com/www/webapp/images/shipei_logo.png&style=8&s_url="+theurl+"&low_login=0&pt_no_onekey=0";
            /*$(".global").hide();
            loginSrc ={
                src:'http://ui.ptlogin2.qq.com/cgi-bin/login?appid=636026402&hln_css=http://mat1.gtimg.com/www/webapp/images/shipei_logo.png&style=8&s_url=http://xw.qq.com/iphone/m/login/loginSuccess.htm&low_login=0&hln_u_tips=请输入您的QQ号码'
            }
            var tpl = template.render("loginTpl", loginSrc);
            $('body').append(tpl)
            $("#login").show();
            $("#goclosed").click(function(){
                var t = $(this);
                setTimeout(function() {
                    $("#login").hide();
                    $(".global").show();
                }, 500);
            });*/

    },
    logout: function(){
        cooKie.clear("skey", '/', "qq.com");
        $(".foot_logout").hide();
        $(".foot_user strong").text("");
        $(".foot_login").show();
    },
    loginSuccess: function(){   
        $(".global").show();
        $("#login").remove();
        get_user_info();
    }
}

$(".foot_logout").on("click",function(){
    Passport.logout();
})
$(".foot_login").on("click",function(){
    Passport.login();
})
// 判断是否登录
if (get_sky()) {
    get_user_info();
}else{
    $(".foot_login").show();
    $(".foot_logout").hide();
};
// lazyload 延迟加载图片
;(function($) {
  $.fn.lazyload = function(threshold, callback) {
    var $w = $(window),
    th = threshold || 0,
    attrib = "data-src",
    images = this,
    loaded;
    this.one("lazyload", function() {
      var source = this.getAttribute(attrib);
      source = source || this.getAttribute("data-src");
      if (source) {
        this.setAttribute("src", source);
        if (typeof callback === "function") callback.call(this);
      }
    });
    function lazyload() {
      var inview = images.filter(function() {
      var $e = $(this);
      var wt = $w.scrollTop(),
      wb = wt + $w.height(),
      et = $e.offset().top,
      eb = et + $e.height();
      return eb >= wt - th && et <= wb + th;
      });
      loaded = inview.trigger("lazyload");
      images = images.not(loaded);
    }
    $w.scroll(lazyload);
    $w.resize(lazyload);
    lazyload();
    return this;
  };
})(window.jQuery || window.Zepto);
/* 财经股票大盘
pricevolume 涨跌额
pricelist   涨跌榜
pricelatest 最新价
name        股票名
 */
var stocks = function() {
  $.getScript('http://sqt.gtimg.cn/q=s_sh000001,s_sz399001,s_r_hkHSI', function() {
    var codes = [v_s_sh000001, v_s_sz399001, v_s_r_hkHSI];
    var arr = [];
    var _clas = "";
    for (var i = 0; i < codes.length; i++) {
      var stock = codes[i].split("~");
      var num = stock[5];
      if (num == 0) {
        _clas = "flat";
      } else if (num > 0) {
        _clas = "rose";
      } else if (num < 0) {
        _clas = "fall";
      };    
      jsonp = {
        name: stock[1],
        pricelatest: stock[3],
        pricevolume: stock[4],
        pricelist: num,
        clas: _clas
      }
      arr.push((template.render("stockTpl", jsonp)));
    };
    arr = arr.join("");
    $('.stockinner').html(arr);
  });
};
var config = {
  cmsindex: 'http://openapi.inews.qq.com/getQQNewsIndexAndItems?chlid=', // CMS数据索引
  cmslist: 'http://openapi.inews.qq.com/getQQNewsNormalContent?ids=', // CMS数据列表
  cmsrefer: '&refer=mobilewwwqqcom&otype=jsonp',
  pcapi: 'http://xw.qq.com/service/interface.php?m=star&a=', // pc数据
  hostname: window.location.hostname.split("."),
  chlid: window.location.href.split("/")[4].replace(/[^a-z]/ig, ""),
  ids: [], // 新闻id
  // _ids     : [],
  comments: [], // 评论条数
  // _comments: [],
  data: '',
  num: 20,
  page: 20,
  keys: {
  // 频道模版名:[数据接口字段(拼接数据接口用),频道中文名(boss展示用)]
  // 无线CMS数据
  'shehui': ['news_news_ssh', '社会', 'http://news.qq.com/?mobile', 'news'],
  'news': ['news_news_top', '新闻', 'http://news.qq.com/?mobile', 'news'],
  'finance': ['news_news_finance', '财经', 'http://finance.qq.com/?mobile', 'finance'],
  'ent': ['news_news_ent', '娱乐', 'http://ent.qq.com/?mobile', 'ent'],
  'sports': ['news_news_sports', '体育', 'http://sports.qq.com/?mobile', 'sports'],
  'mil': ['news_news_mil', '军事', 'http://mil.qq.com/?mobile', 'mil'],
  'tech': ['news_news_tech', '科技', 'http://tech.qq.com/?mobile', 'tech'],
  'digi': ['news_news_digi', '数码', 'http://digi.qq.com/?mobile', 'digi_tech'],
  'fashion': ['news_news_lad', '时尚', 'http://fashion.qq.com/?mobile', 'fashion'],
  'auto': ['news_news_auto', '汽车', 'http://auto.qq.com/?mobile', 'auto'],
  'games': ['news_news_game', '游戏', 'http://games.qq.com/?mobile', 'games'],
  'house': ['news_news_house', '房产', 'http://house.qq.com/?mobile', 'house'],
    'astro': ['news_news_astro', '星座', 'http://astro.qq.com/?mobile', 'astro'],
  'photo': ['news_photo', '图片', 'http://news.qq.com/?mobile', 'photo'],
  'video': ['news_video', '视频', 'http://v.qq.com/?mobile', 'video'],
  'cul': ['news_news_cul', '文化', 'http://cul.qq.com/?mobile', 'cul'],
  // 'huati'   :['news_topic','今日话题'], // 无线CMS数据
  // 地方站
  'guangdong': ['news_news_gd', '大粤网', 'http://gd.qq.com/?mobile', 'gd'],
  'chengdu': ['news_news_cd', '大成网', 'http://cd.qq.com/?mobile', 'cd'],
  'chongqing': ['news_news_cq', '大渝网', 'http://cq.qq.com/?mobile', 'cq'],
  'shanghai': ['news_news_sh', '大申网', 'http://sh.qq.com/?mobile', 'sh'],
  'henan': ['news_news_henan', '大豫网', 'http://henan.qq.com/?mobile', 'henan'],
  'hubei': ['news_news_hb', '大楚网', 'http://hb.qq.com/?mobile', 'hb'],
  'zhejiang': ['news_news_zj', '大浙网', 'http://zj.qq.com/?mobile', 'zj'],
  'shanxi': ['news_news_xian', '大秦网', 'http://xian.qq.com/?mobile', 'xian'],
  'hunan': ['news_news_hn', '大湘网', 'http://hn.qq.com/?mobile', 'hn'],
  'fujian': ['news_news_fj', '大闽网', 'http://fj.qq.com/?mobile', 'fj'],
  'jiangsu': ['news_news_js', '大苏网', 'http://js.qq.com/?mobile', 'js'],
  'liaoning': ['news_news_ln', '大辽网', 'http://ln.qq.com/?mobile', 'ln'],
  // 引入PC的二级栏目
  'huati': ['getTopicNews', '今日话题', 'http://news.qq.com/?mobile', 'view'], // pc、mobile统一的数据
  'star': ['getdata', '明星', 'http://ent.qq.com/?mobile', 'ent'],
  'movie': ['getMovieNews', '电影', 'http://ent.qq.com/?mobile', 'ent'],
  'music': ['getMusicNews', '音乐', 'http://ent.qq.com/?mobile', 'ent']
  }
};
if (window.location.href.indexOf("iphone") > 0 ) {
  config.chlid = window.location.href.split("/")[5].replace(/[^a-z]/ig, "");
}else{
  config.chlid = window.location.href.split("/")[4].replace(/[^a-z]/ig, "");
};
// 数码科技推广12月16日-12月22日 （一周）
/*if (config.chlid == "tech" || config.chlid == "digi") {
   $(".more").after('<div class="chntui"><a href="http://digi.tech.qq.com/zt2013/bestchoice/mobile.htm">年底评奖千千万，但“最佳选择”只有一个</a></div>')
};*/
if (config.chlid == "sports") {
  $(".nav").hide();
};
// 主导航
$(".gochannels").click(function() {
  $(this).toggleClass('upall');
  var t = $(".channels");
  t.toggleClass("channelstoggle");
});
// 二级导航
$("#toggle").click(function() {
  var t = $(this);
  t.toggleClass("toggle");
  if (t.hasClass("toggle")) {
      $(".navmore").show();
  } else {
      $(".navmore").hide();
  };
});
$(".nav li").click(function() {
  $(this).siblings().removeClass("current");
  $(this).addClass("current");
});
$(".channels li").click(function() {
  $(this).siblings().removeClass("current");
  $(this).addClass("current");
});
// 索引数据请求
var getindex = function() {
  Jsonp.request(config.cmsindex + config.keys[config.chlid][0] + config.cmsrefer, {
      "t": new Date().getTime()
  });
};
// 列表数据请求
var getlist = function(arrid) {
  Jsonp.request(config.cmslist + arrid + config.cmsrefer, {
      "t": new Date().getTime()
  });
};
// 索引数据返回
/*第一次点击加载更时，请求索引，并将索引返回的id和评论数本地化处理，
以后的加载更多就不需要请求索引了。减少了请求数，速度提升50%。*/
var getNewsIndexOutput = function(data) {
  if (data.ret === 0) {
    for (var i = config.num; i < data.idlist[0].ids.length; i++) {
      config.ids.push(data.idlist[0].ids[i].id);
      config.comments.push(data.idlist[0].ids[i].comments);
    };
    localindex();
  } else {
    $(".more").hide();
  };
};
// 提取 加载更多 所需的id和评论数
var localindex = function() {
  var _ids = [];
  var _comments = [];
  for (var i = 0; i < config.num; i++) {
    _ids.push(config.ids.shift());
    _comments.push(config.comments.shift());
  };
  config._commentsarr = _comments;
  getlist(_ids);
};
// 加载更多
$('.more').click(function() {
  // 判断是否第一次点击加载更多
  // 如果是:则执行索引请求
  // 如果否:则执行列表请求
  $(this).html('\u52a0\u8f7d\u4e2d...');
  if (config.ids == "") {
    getindex();
  } else {
    localindex();
  };
  // console.log(config.chlid);
  BossCode.updata("", "", "", "", "", "", "", "",config.chlid,"");
});
$(".list li").each(function() {
  $(this).bind("click", function() {
    BossCode.updata("", "", "", "", "", "", "",config.chlid,"","");
  })
});
//图片跳转
$(".photoList li").each(function(){
  $(this).bind("click",function(){
    BossCode.updata("","","","","","","","","","","","","","","","","","","",newsboss.pic[0],"");
    $(this).addClass("on");
    var _than3=$(this);
    setTimeout(function(){_than3.removeClass("on");},500);
    setTimeout(function(){window.location.href=_than3.attr("date-url");},500);
  })
});
// 自动配置域名
var fixhost = function(e) {
  switch (e) {
    case "xw":
      return "http://xw.qq.com/";
    case "testshipei":
      return "http://testshipei.qq.com/";
    case "shipei":
      return "http://shipei.qq.com/";
    default:
      return "http://xw.qq.com/";
  };
};
 /*
文章类型
articletype = 0   普通
articletype = 100 专题
articletype = 1   通栏图片
articletype = 7   图文直播
articletype = 5,6   外链
articletype = 102   玫瑰直播
flag: "1"  独家
flag: "2"  投票
flag: "3"  视频
flag: "4"  专题
flag: "5"  快讯
flag: "6"  直播
 */
// 列表数据返回处理 回填html
var getNewsContentOnlyOutput = function(data) {
  var tpl = [];
  for (var i = 0; i < data.newslist.length; i++) {
    var _link = "";
    var _num = data.newslist[i].id.replace(/[^0-9]/ig, "");
    var _liveid = data.newslist[i].graphicLiveID;
    // 判断文章类型匹配不同模版
    switch (data.newslist[i].flag) {
      case "4":
        _link = fixhost(config.hostname[0]) + 'c/zt/' + _num + '/' + data.newslist[i].id;
        break;
      case "6":
        _link = fixhost(config.hostname[0]) + 'c/' + config.keys[config.chlid][3] + '/' + _num + '/' + data.newslist[i].id;
        break;
      default:
        _link = fixhost(config.hostname[0]) + 'c/' + config.keys[config.chlid][3] + '/' + _num + '/' + data.newslist[i].id;
    };
    switch (data.newslist[i].articletype) {
      case "7":
        if (_liveid) {
          _link = fixhost(config.hostname[0]) + 'c/zhibo/' + _liveid + '/' + data.newslist[i].id;
        } else {
          _link = fixhost(config.hostname[0]) + 'c/' + config.keys[config.chlid][3] + '/' + _num + '/' + data.newslist[i].id;
        };
        break;
      case "100":
        _link = fixhost(config.hostname[0]) + 'c/zt/' + _num + '/' + data.newslist[i].id;
        break;
        case "102":
        if (_liveid) {
                _link = fixhost(config.hostname[0]) + 'c/zhibo/' + _liveid + '/' + data.newslist[i].id;
            } else {
                _link = fixhost(config.hostname[0]) + 'c/' + config.keys[config.chlid][3] + '/' + _num + '/' + data.newslist[i].id;
            };
        break;
        case "6":
        _link = data.newslist[i].url;
        break;
        case "5":
        _link = data.newslist[i].url;
        break;  
      default:
        _link = fixhost(config.hostname[0]) + 'c/' + config.keys[config.chlid][3] + '/' + _num + '/' + data.newslist[i].id;
    };
    var _txtshit = "";
    if (data.newslist[i].abstract.length > 26) {
      _txtshit = data.newslist[i].abstract.substring(0, 23) + "...";
    } else {
      _txtshit = data.newslist[i].abstract
    };
   // if (data.newslist[i].articletype != 5 || data.newslist[i].articletype != 6 || data.newslist[i].articletype != 102) {


    // 格式化数据
    jsonp = {
      link: _link,
      imgsrc: data.newslist[i].thumbnails_qqnews,
      title: data.newslist[i].title,
      summary: _txtshit,
      flag: "flag" + data.newslist[i].flag,
      commcount: config._commentsarr[i],
      imagecount: data.newslist[i].imagecount + "\u56fe",
      type: data.newslist[i].articletype,
      loadimg: "http://mat1.gtimg.com/www/mobi/image/loadimg.png"
    }
    tpl.push((template.render("listTpl", jsonp)));
};
  // };
  config.page += 20;
  if (config.page < 200) {
    $(".more").show();
  } else {
    $(".more").hide();
  };
  tpl = tpl.join("");
  $('.list ul').append(tpl);
  $('.more').html('<span class="gomore">\u70b9\u51fb\u67e5\u770b\u66f4\u591a</span>');
  $(".list img").lazyload();
};
$(".gotop").click(function() {
  window.scroll(0, 0);
  BossCode.updata("", "", "", "", "", "", "", "", "","gotop");
});
$(".pcs").click(function() {
  window.location.href = config.keys[config.chlid][2]
});
var boss = {
  gochannel: ["news", "finance", "ent", "sports", "mil", "tech", "digi", "lady", "auto", "games", "house", "astro"],
  appList: ["newapp", "finance", "qq", "weixin", "video", "weibo", "qzone", "more"],
  otherList: ["weibo", "qzone", "mail", "pengyou"],
  navchangeList: ["nav", "index", "news", "finance", "ent", "sports", "mil", "tech", "digi", "lady", "auto", "games", "house", "astro", "photo", "video", "dy", "qzone", "book", "games", "software"],
  nav2List: ["weibo", "qzone", "book", "games", "software"],
  newsnav:["news","shehui","mil","pic","huati"],
  entnav:["ent","star","movie","music","guiquan"]
}
//外加内容的统计字段
var newsboss = {
  topic:["news_topic","news_news","news_newseight"],
  society:["newssocietyf","newssocietyl","newssocietymore"],
  mil:["newsmilf","newsmill","newsmilmore"],
  pic:["newsphotolist","newsphotomore"]
}
var BossTJ1 = new Image(1, 1);
var BossRef = new Image(1, 1);
var BossCode = {
  RndNum: function(n) {
    var rnd = "";
    for (var i = 0; i < n; i++) {
      rnd += Math.floor(Math.random() * 10);
    }
    return rnd;
  },
  updata: function(url, refer, site, toplogo, topnav, backpc1, focus, modlist, more, tongji01, tongji02, tongji03, tongji04, tongji05, tongji06, tongji07, tongji08, tongji09, tongji10, tongji11, tongji12) {
    var o_cookie = trimUin(pgvGetCookieByName("o_cookie=")) || "";
    BossTJ1.src = "http://btrace.qq.com/collect?sIp=&iQQ=" + o_cookie + "&sBiz=MobileChannel&sOp=&iSta=&iTy=1720&iFlow=" + BossCode.RndNum(9) + "&url=" + encodeURIComponent(url) + "&refer=" + encodeURIComponent(refer) + "&site=" + encodeURIComponent(site) + "&toplogo=" + encodeURIComponent(toplogo) + "&topnav=" + encodeURIComponent(topnav) + "&backpc1=" + encodeURIComponent(backpc1) + "&focus=" + encodeURIComponent(focus) + "&modlist=" + encodeURIComponent(modlist) + "&more=" + encodeURIComponent(more) + "&tongji01=" + encodeURIComponent(tongji01) + "&tongji02=" + encodeURIComponent(tongji02) + "&tongji03=" + encodeURIComponent(tongji03) + "&tongji04=" + encodeURIComponent(tongji04) + "&tongji05=" + encodeURIComponent(tongji05) + "&tongji06=" + encodeURIComponent(tongji06) + "&tongji07=" + encodeURIComponent(tongji07) + "&tongji08=" + encodeURIComponent(tongji08) + "&tongji09=" + encodeURIComponent(tongji09) + "&tongji10=" + encodeURIComponent(tongji10) + "&tongji11=" + encodeURIComponent(tongji11) + "&tongji12=" + encodeURIComponent(tongji12) + "&tongji13=xx";
  }
};
upRefer = {
  ref: function(u, r) {
    var _u = trimUin(pgvGetCookieByName("o_cookie=")) || "";
    var _t = new Date().getTime();
    BossRef.src = 'http://btrace.qq.com/collect?sIp=&iQQ=' + _u + '&sBiz=shipei&sOp=&iSta=&iTy=1934&iFlow=' + _t + '&url=' + encodeURIComponent(u) + '&refer=' + encodeURIComponent(r);
  }
};
$(".nav li").each(function(i) {
  $(this).bind("click", function() {
    if (config.chlid == "ent"||config.chlid == "star"||config.chlid == "movie"||config.chlid == "music") {
      BossCode.updata("", "", "", "", boss.entnav[i], "", "", "", "","","");
    }else if (config.chlid == "news"||config.chlid == "shehui"||config.chlid == "mil") {
      BossCode.updata("", "", "", "", boss.newsnav[i], "", "", "", "","","");
    } 
  })
});
//原创模块点击统计
$('.module .original li').eq(0).click(function(){
  BossCode.updata("","","","","","","","","","",newsboss.topic[0],"","","","","","","","","","");
})
$('.module .original li').eq(1).click(function(){
  BossCode.updata("","","","","","","","","","","",newsboss.topic[1],"","","","","","","","","");
})
$('.module .original li').eq(3).click(function(){
  BossCode.updata("","","","","","","","","","","","",newsboss.topic[2],"","","","","","","","");
})
//点击查看更多内容
$('.getNewsmore').click(function(){
  $(this).html('\u8df3\u8f6c\u4e2d...');
  window.location.href=fixhost(config.hostname[0])+'m/shehui/';
  BossCode.updata("","","","","","","","","","","","","","","",newsboss.society[2],"","","","","");
})
$('.module .society .full').click(function(){
  BossCode.updata("","","","","","","","","","","","","",newsboss.society[0],"","","","","","","");
})
$('.module .society .lite').click(function(){
  BossCode.updata("","","","","","","","","","","","","","",newsboss.society[1],"","","","","","");
})
$('.getMilmore').click(function(){
  $(this).html('\u8df3\u8f6c\u4e2d...');
  window.location.href=fixhost(config.hostname[0])+'m/mil/';
  BossCode.updata("","","","","","","","","","","","","","","","","","",newsboss.mil[2],"","");
})
$('.module .mil .full').click(function(){
  BossCode.updata("","","","","","","","","","","","","","","","",newsboss.mil[0],"","","","");
})
$('.module .mil .lite').click(function(){
  BossCode.updata("","","","","","","","","","","","","","","","","",newsboss.mil[1],"","","");
})
$('.getPicmore').click(function(){
  $(this).html('\u8df3\u8f6c\u4e2d...');
  window.location.href=fixhost(config.hostname[0])+'m/photo/';
  BossCode.updata("","","","","","","","","","","","","","","","","","","","",newsboss.pic[1]);
})
$(".gochannels").bind("click", function() {
  BossCode.updata("", "", "", "", boss.navchangeList[0], "", "", "", "","");
});
$(".logo").bind("click", function() {
  BossCode.updata("", "", "", 1, "", "", "", "", "");
});
// 顶部导航统计代码
$(".channels li").each(function(i) {
  $(this).bind("click", function() {
    BossCode.updata("", "", "", "", boss.navchangeList[i + 1], "", "", "", "","");
  })
});
$(".footnav li").each(function(i) {
  $(this).bind("click", function() {
    BossCode.updata("", "", "", "", boss.navchangeList[i + 1], "", "", "", "","");
  })
});
$(".gallery").bind("click", function() {
  BossCode.updata("", "", "", "", "", "", 1, "", "");
});
$(".repweb").click(function(){
  BossCode.updata("", "", "", "", "", "", "", "", "","fankui");
});
$(".pcs").click(function(){
  BossCode.updata("", "", "", "", "", "backpc1", "", "", "","");
});
$(".smlweb").click(function(){
  BossCode.updata("", "", "", "", "", "", "", "", "","jianban");
});
$(".foot_login").on("click",function(){
    BossCode.updata("", "", "", "mynews_bottom_login", "", "", "", "", "", "", "", "","","")
});
$(".foot_logout").on("click",function(){
    BossCode.updata("", "", "", "mynews_logout", "", "", "", "", "", "", "", "","","")
});
var boss_ref = function() {
  var h = window.location.href;
  var ref = "";
  if (h.indexOf("?pgv_ref=") > -1) {
    ref = h.split("?pgv_ref=")[1];
    upRefer.ref(h, ref);
  };
}
window.onload = function() {
  $.getScript("http://pingjs.qq.com/ping.js", function() {
    // var host = window.location.href;
    if (typeof pgvMain == "function") {
      if (config.chlid == "finance") {
        pvCurDomain = "finance.xw.qq.com";
      };
      // pvRefDomain=host;
      pgvMain();
    }
    BossCode.updata(window.location.href || "error", document.referrer || "", config.chlid, "", "", "", "", "", "");
    boss_ref();
  });
  $.getScript("http://tajs.qq.com/stats?sId=21221104", function() {});
  if (window.location.pathname.indexOf("finance") > 0 && !/Windows Phone/i.test(navigator.userAgent)) {
    stocks();
  };
  if (/Windows Phone/i.test(navigator.userAgent)) {
    $(".stock").hide();
  };
  $(".list img").lazyload();
}/*  |xGv00|4891a5fba601d81fe2abfb130cf306c6 */