$(function(){$('#nest_nav_box').css({"bottom":$(window).height()/2-200});$(window).resize(function(){$('#nest_nav_box').animate({bottom:$(window).height()/2-200},{duration:600,queue:false});var wid=$(window).width();if(wid<1095){$("#nest_nav_box").hide()}else{$("#nest_nav_box").fadeIn()}});$(window).scroll(function(){var t=document.documentElement.scrollTop||document.body.scrollTop;$("#nest_link_gotop").attr("flag",t);if(t>=150){$("#nest_nav_box").fadeIn()}else{$("#nest_nav_box").fadeOut()}});$("#nest_link_gotop").click(function(){$('html, body').animate({scrollTop:0},200)});var ewm_dsq;$("#nest_link_ewm").bind("mouseover",function(){clearTimeout(ewm_dsq);$("#nest_ewm_box").show()}).bind("mouseout",function(){ewm_dsq=setTimeout(function(){$("#nest_ewm_box").hide()},500)})})