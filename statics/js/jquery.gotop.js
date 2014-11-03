define(function(require, exports, module) {
    var tip_right,tip_bottom;
    var wid=$(window);
    var w_wid=wid.width();
    var w_hei=wid.height();
    $('body').append('<div id="tipback" class="btn_top" title="返回顶部"><a class="icon_top_n" href="javascript:;"></a></div>');
    getTip_rb(w_wid,w_hei);
    var tipback=$('#tipback');
    tipback.css({
      "right":  tip_right,
      "bottom":tip_bottom
    });
    tipback.bind("click",function(){
      $('html, body').animate({scrollTop: 0},200);
    });
    wid.resize(function() {
      w_wid=wid.width();
      w_hei=wid.height();
      getTip_rb(w_wid,w_hei);
      tipback.animate({
        right: tip_right,
        bottom: tip_bottom
      },
      {
        duration: 600,
        queue: false
      });
    });
    wid.scroll(function() {
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      if (t >= 145) {
        tipback.fadeIn();
      } else {
        tipback.fadeOut();
      }
    }); 
    function getTip_rb(w_wid,w_hei){
        tip_right=w_wid / 2 - 570;
        tip_bottom=w_hei / 2 - 200;
    }
});