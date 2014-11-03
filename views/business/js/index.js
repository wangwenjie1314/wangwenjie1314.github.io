var timer=null;
$(function(){
	//焦点图
	$('.wj_jdt_1 .jdt_slide ul').imgScroll({
		firstDiv:'.wj_jdt_1 .jdt_slide', //最外层的div样式
		scrollBox:'.wj_jdt_1 .jdt_slide ul',
		scrollImgBox:'.wj_jdt_1 .jdt_slide ul li',//滚动图片父元素样式
		tabDiv:'.wj_jdt_1 .info_btn', //当前状态最外层div
		tabDivList:'.wj_jdt_1 .info_btn li',//可点击小按钮
		botPrev:'.slide_img_prev',//按钮上一个
		botNext:'.slide_img_next',//按钮下一个
		changeType:"slide",//滑动方式两种:渐现'fadein',滑动'slide',默认为滑动
		thumbNowClass:'on',//导航对象当前的class,默认为on
		thumbOverEvent:true,//鼠标点击thumbObj才切换对象，默认为true，为false时,鼠标滑动thumbObj时切换对象
		changeTime:5000, //默认切换时间
		ImgBoxMar:0, //图片外边距
		flag:true //是否自动切换 默认为true
	})
	//设置鼠标滑过显示左右按钮
	$(".wj_jdt_1").bind("mouseover",function(){
		$(".slide_img_prev").show();
		$(".slide_img_next").show();	
	}).bind("mouseout",function(){
		$(".slide_img_prev").hide();
		$(".slide_img_next").hide();									
	})
	startMove();
	//设置返回顶部显示位置
    $('#tipback').css({"right":$(window).width()/2-568,"bottom":$(window).height()/2-270});
	$(window).resize(function() {
	  $('#tipback').animate({right: $(window).width()/2-570,bottom: $(window).height()/2-270},{duration: 600, queue: false } );
	});
    $(window).scroll(function(){//浮动窗滚动
	  var t = document.documentElement.scrollTop || document.body.scrollTop;
	  var top_div = document.getElementById( "tipback" );
	  if( t >= 145 ) {
	   top_div.style.display = "block";
	  } else {
	   top_div.style.display = "none";
	  }
	});
	$('a').bind("focus", function(){$(this).blur();});//a连接去除虚线   	   
})
//无缝滚动
function startMove(){
	var oUl=$(".hj_img_box .img_box ul");
	oUl.append(oUl.children().clone());
	var oLi=$(".hj_img_box .img_box ul li");
	oUl.css('width',(oLi.width()+20)*oLi.length+"px");
	clearInterval(timer);
	timer=setInterval(move,100);
	oUl.bind('mouseover',function(){
		clearInterval(timer);
	}).bind('mouseout',function(){
		timer=setInterval(move,100);
	})
	var i=1;
	var offLef=0;
	var b_wid=parseInt(oUl.css("width"))/2;
	function move(){
		offLef=parseInt(oUl.css("left"));
		if(Math.abs(offLef)>b_wid){
			i=0;
			oUl.css("left",i);
		}
		i++;
		oUl.css("left","-"+i+"px");
	}
}
function gotop(){$('html, body').animate({scrollTop: 0}, 200);}//返回顶部