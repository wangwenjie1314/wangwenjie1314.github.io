// JavaScript Document	
$(function(){
	var wind=$(window).width();
	$(".nav_box_hide").width(wind);
	now_date();
	$(".nav_box .nav_l ul li").each(function(){
		$(this).bind("mouseover",function(){
			$(this).addClass("on").siblings().removeClass("on");
			var ind=$(this).index();
			if(ind!=0){
				$(".nav_box_hide").show();
				$(this).find("dl").show();
			}
		}).bind("mouseout",function(){
			$(this).removeClass("on");
			$(".nav_box_hide").hide();
			$(".nav_box .nav_l ul li dl").hide();
		})
	})
	$(".gl_box_k ul li").each(function(){
		$(this).bind("mouseover",function(){
			$(this).addClass("on").siblings().removeClass("on");
		}).bind("mouseout",function(){
			$(this).removeClass("on");
		})
	})
	$(".jh_box_con_l ul li").each(function(){
		$(this).bind("mouseover",function(){
			$(this).find("span").stop().animate({right:"5px"},500);
		}).bind("mouseout",function(){
			$(this).find("span").stop().animate({right:"15px"},500);
		})
	})
	$(".rm_a_box dl dd").each(function(){
		$(this).bind("mouseover",function(){
			$(this).parent("dl").addClass("on");
		}).bind("mouseout",function(){
			$(this).parent("dl").removeClass("on");
		})
	})
	//设置返回顶部显示位置
	$('#tipback').css({"right":function(){
		var $width= $(window).width()/2-574.5;
		return $width;
	}});
	$(window).resize(function() {		
		var wind=$(window).width();
		$(".nav_box_hide").width(wind);
		$('#tipback').animate({ right: $(window).width()/2-574.5},{ duration: 600, queue: false } );
	});
	//a链接去除虚线
	$('a').bind("focus", function(){$(this).blur();})
})
//当页面滚动的时候显示
window.onscroll = function(){ 
    var t = document.documentElement.scrollTop || document.body.scrollTop;      
    var top_div = document.getElementById( "tipback" );
    if( t >= 345 ) { 
        top_div.style.display = "block";		
    } else { 
        top_div.style.display = "none";
	}
}
function gotop(){$('html, body').animate({scrollTop: 0}, 200);}//返回顶部
//当前日期
function now_date(){
	var myDate=new Date();
	var YY=myDate.getFullYear();  
    var MM=myDate.getMonth()+1;
    var DD=myDate.getDate();  
	var tempMM=MM;var tempDD=DD;
	if(MM<10){tempMM="0"+MM;}
	if(DD<10){tempDD="0"+DD;}
	var temp_date=YY+"-"+tempMM+"-"+tempDD;
	$("#date_in").val(temp_date);$("#date_out").val(temp_date);
	var mytime=myDate.toLocaleTimeString(); 
	$("#now_date").text(temp_date+" "+mytime);
}
//搜索验证
function submitSearch(){
	var site=$("#site").val();
	if(site=="城市,区域,国家,地标,酒店"||site==""||site==null){
		alert("温馨提示：请输入目的地");return;
	}
}