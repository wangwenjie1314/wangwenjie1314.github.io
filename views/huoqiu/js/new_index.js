function superSlide() {
  var shuffImgLength = 3;
  var curPage = 0;
  var newPage = shuffImgLength - 1;
  var version = 0;
  var playing = true;
  initSlide();
  function initSlide() {
    bkcolors = ["#ffc64d", "#4f5872", "#726763"];
    hrefs = ["/plan/huoqiuS/index.html?key=active", "/about/1013.html", "/plan/huoqiuS/index.html"];
    animates = [{}];
    var pointLiLength = $(".point-list li").length;
    $(".point-list").css({
      "width": pointLiLength * 34,
      "marginLeft": -pointLiLength * 17
    });
    $(".point-list").show();
    $(".mc-plan-list li, .banner-container-inner, .huoqiu-community,.plan-huoqiuplus").mouseenter(function(event) {
      var btnObj = $(this).find(".check-plan-btn");
      btnObj.animate({
        left: 10,
        opacity: 0.7
      },
      100).animate({
        left: -8,
        opacity: 0.8
      },
      100).animate({
        left: 6,
        opacity: 0.9
      },
      100).animate({
        left: 0,
        opacity: 1
      },
      100)
    });
    $(".point-list li").click(function(event) {
      if ($(this).hasClass('current')) {
        return false
      } else {
        var dataValue = parseInt($(this).attr("data-value"));
        newPage = dataValue;
        $(".point-list li").removeClass('current');
        $(".point-" + newPage).addClass('current');
        animation(curPage, newPage);
        curPage = newPage
      }
      return false
    });
    $(".banner-container").mouseenter(function(event) {
      playing = false
    }).mouseout(function(event) {
      playing = true;
      shuffAnimate(version + 1)
    });
    shuffAnimate(version + 1);
    $(".banner-container").click(function(event) {
      var hrefLink = $(this).attr("href");
      location.href = hrefLink
    })
  }
  function shuffAnimate(playVersion) {
    function changePageLater(curVersion) {
      if (playing && curVersion > version) {
        version = curVersion;
        setTimeout(function() {
          if (playing && version == curVersion) {
            newPage = curPage == (shuffImgLength - 1) ? 0 : curPage + 1;
            $(".point-list li").removeClass('current');
            $(".point-" + newPage).addClass('current');
            animation(curPage, newPage);
            shuffAnimate(version + 1);
            curPage = newPage
          }
        },
        15000)
      }
    }
    changePageLater(playVersion)
  }
  function animation(oldPageId, newPageId) {
    $("#shuff-" + oldPageId).hide();
    $("#shuff-" + newPageId).fadeIn(1000);
    $(".banner-container").css("background", bkcolors[newPageId]);
    $(".banner-container").attr("href", hrefs[newPageId]);
    $(".pyramid-" + oldPageId).hide();
    setTimeout(function() {
      $(".pyramid-" + oldPageId).addClass('shuff-hide')
    },
    500);
    $(".pyramid-" + newPageId).fadeIn(300);
    $(".pyramid-" + newPageId).removeClass('shuff-hide')
  }
  function fanShape(obj, r, angle_start, angle_end, time, parity) {
    var start_time = (new Date()).getTime();
    var fisrtTime = true;
    animate();
    function animate() {
      var time_pass = (new Date()).getTime() - start_time == 0 ? 0.0001 : (new Date()).getTime() - start_time;
      var percent = (time_pass / time);
      if (percent < 1 && percent > 0) {
        var angle_current = percent * (angle_end - angle_start) + angle_start;
        if (parity == 0) {
          var current_height = r - Math.abs(r * Math.sin(angle_current));
          var current_width = Math.abs(r * Math.cos(angle_current));
          obj.css({
            "width": current_width,
            "height": current_height + 8
          })
        } else {
          var current_height = r - Math.abs(r * Math.cos(angle_current));
          var current_width = Math.abs(r * Math.sin(angle_current));
          obj.css({
            "height": current_width,
            "width": current_height + 8
          })
        }
        setTimeout(animate, 10)
      } else {
        var angle_current = angle_end;
        if (parity == 0) {
          var current_height = r - Math.abs(r * Math.sin(angle_current));
          var current_width = Math.abs(r * Math.cos(angle_current));
          obj.css({
            "width": current_width,
            "height": current_height + 8
          })
        } else {
          var current_height = r - Math.abs(r * Math.cos(angle_current));
          var current_width = Math.abs(r * Math.sin(angle_current));
          obj.css({
            "height": current_width,
            "width": current_height + 8
          })
        }
      }
    }
  }
}