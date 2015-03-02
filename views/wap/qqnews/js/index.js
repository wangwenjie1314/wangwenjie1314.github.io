$(function(){
	// 主导航
	$("#gochannels").click(function() {
	  $(this).toggleClass('upall');
	  $("#channels").toggleClass("channelstoggle");
	});
	//新闻列表
    var x=function(data){
    	var tpl = [];
  		for (var i = 0; i < data.newslist.length; i++) {
  			var _txtshit = "";
		    if (data.newslist[i].abstract.length > 26) {
		      _txtshit = data.newslist[i].abstract.substring(0, 23) + "...";
		    } else {
		      _txtshit = data.newslist[i].abstract
		    };
  			// 格式化数据
		    jsonp = {
		      link: data.newslist[i].surl,
		      imgsrc: data.newslist[i].thumbnails_qqnews,
		      title: data.newslist[i].title,
		      summary: _txtshit,
		      flag: "flag" + data.newslist[i].flag,
		      commcount: 0,
		      imagecount: data.newslist[i].imagecount + "\u56fe",
		      type: data.newslist[i].articletype,
		      loadimg: "http://mat1.gtimg.com/www/mobi/image/loadimg.png"
		    }
		    tpl.push((template.render("listTpl", jsonp)));
  		}
  		tpl = tpl.join("");
		$('#list ul').append(tpl);
		//$('.more').html('<span class="gomore">\u70b9\u51fb\u67e5\u770b\u66f4\u591a</span>');
		$("#list img").lazyload();
    };
    x(getNewsContentOnlyOutput);
});
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