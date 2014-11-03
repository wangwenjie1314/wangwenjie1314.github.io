/*mw首页 js update by wwj 2014-09-26 09:19:05*/
var band_hei;
$(function(){
    var box_speeds=[2000,900,1300,1000];
    var animateBlock={
        isVisiable:function(el,wh,st,delta){
            delta=delta||200;
            return ($(el).offset().top+200)<wh+st-delta;
        },
        animations:{
            band:function(wh,st){
                var $el=$("#mw-banner");
                if(animateBlock.isVisiable($el,wh,st)){
                    $("#mw-banner-box").animate({opacity:1},1000);
                    $("#mw-banner-text-life").delay(200).animate({bottom:0,opacity:1},1000);
                    $("#mw-header").delay(500).animate({top:0,opacity:1},2000);
                    delete animateBlock.animations.band;
                }
            },
            intro1:function(wh,st){
                var $el=$("#mw-box-1");
                if(animateBlock.isVisiable($el,wh,st)){
                    $el.find(".mw-box-b").animate({height:722},box_speeds[0]);
                    $el.find(".mw-box-l").delay(box_speeds[1]).animate({top:110,opacity:1},box_speeds[3]);
                    $el.find(".mw-box-r").delay(box_speeds[2]).animate({right:16,opacity:1},box_speeds[3]);
                    delete animateBlock.animations.intro1;
                }
            },
            intro2:function(wh,st){
                var $el=$("#mw-box-2");
                if(animateBlock.isVisiable($el,wh,st)){
                    $el.find(".mw-box-b").animate({height:689},box_speeds[0]);
                    $el.find(".mw-box-l").delay(box_speeds[1]).animate({top:125,opacity:1},box_speeds[3]);
                    $el.find(".mw-box-r").delay(box_speeds[2]).animate({right:70,opacity:1},box_speeds[3]);
                    delete animateBlock.animations.intro2;
                }
            },
            intro3:function(wh,st){
                var $el=$("#mw-box-3");
                if(animateBlock.isVisiable($el,wh,st)){
                    $el.find(".mw-box-b").animate({height:609},box_speeds[0]);
                    $el.find(".mw-box-l").delay(box_speeds[1]).animate({top:100,opacity:1},box_speeds[3]);
                    $el.find(".mw-box-r").delay(box_speeds[2]).animate({right:40,opacity:1},box_speeds[3]);
                    delete animateBlock.animations.intro3;
                }
            },
            intro4:function(wh,st){
                var $el=$("#mw-box-4");
                if(animateBlock.isVisiable($el,wh,st)){
                    $el.find(".mw-box-b").animate({height:608},box_speeds[0]);
                    $el.find(".mw-box-l").delay(box_speeds[1]).animate({top:115,opacity:1},box_speeds[3]);
                    $el.find(".mw-box-r").delay(box_speeds[2]).animate({right:30,opacity:1},box_speeds[3]);
                    delete animateBlock.animations.intro4;
                }
            }
        }
    }
    init_hei();//初始化高度
    $(window).on("resize",function(){
        init_hei();//窗口变化时
        setTimeout(function(){$(document).trigger("scroll");},300);
    });
    $(window).on("scroll",function(){
        var animations,
            name,
            winHeight=$(window).height(),
            scrollTop=$(window).scrollTop();
        animations=animateBlock.animations;
        for(name in animations){
            animations[name](winHeight,scrollTop);
        }
        if(scrollTop>band_hei){
            $("#mw-header").addClass("mask").css("opacity",".7");
        }else{
            $("#mw-header").removeClass("mask").css("opacity","1");
        }
    });
    if($(window).height()>100){
       setTimeout(function(){$(document).trigger("scroll");},300);
    }
});
function init_hei(){
    var temp_band_hei=$(window).height();
    $("#mw-banner").height(temp_band_hei);
    band_hei=temp_band_hei-150;
}