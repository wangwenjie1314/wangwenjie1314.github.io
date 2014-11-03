// JavaScript Document
/*图片焦点图上下左右切换效果*/
;(function($){
	$.fn.extend({
		"imgScroll": function(object){			
			object = $.extend({
				firstDiv:null, //最外层的div样式
				scrollBox:null,
				scrollImgBox:null,//滚动图片父元素样式
				tabDiv:null, //当前状态最外层div
				tabDivList:null,//可点击小按钮
				botPrev:null,//按钮上一个
				botNext:null,//按钮下一个
				changeType:"slide",//滑动方式两种:渐现'fadein',滑动'slide',默认为滑动
				thumbNowClass:'on',//导航对象当前的class,默认为on
				thumbOverEvent:true,//鼠标点击thumbObj才切换对象，默认为true，为false时,鼠标滑动thumbObj时切换对象
				changeTime:5000, //默认切换时间
				ImgBoxMar:0, //图片外边距
				flag:true //是否自动切换 默认为true
			},object || {});
			
			//初始化变量						
			var imgLen = $(object.scrollImgBox).length;
			var imgNum = 0;
			var tabNum = 0;
			var nowIndex =0; //定义全局指针
			var index;//定义全局指针			
			var scrollWid = $(object.scrollImgBox).width() + object.ImgBoxMar;
			$(object.scrollImgBox).clone().appendTo($(this)); //复制元素并添加
			
			//主切换函数下一个
			function changeEffectNext(){
				//滑动效果
				if( object.changeType == 'slide' ){
						if(imgNum < imgLen ){ imgNum++;}else{
							if(imgNum == imgLen){
								$(object.scrollBox).css({'margin-left':0});
								imgNum  = 1;
							}
						}							
						$(object.scrollBox).animate({'margin-left':-scrollWid*imgNum});						 	
				
						if( tabNum < imgLen-1 ){ tabNum ++; }else{
								if( tabNum == imgLen-1 ){ 
									tabNum = 0;
								}
						}						
						$(object.tabDivList).eq(tabNum).addClass(object.thumbNowClass);
						$(object.tabDivList).eq(tabNum).siblings().removeClass(object.thumbNowClass);	
						
				 }
				 //渐现效果
				 if(object.changeType == 'fadein')
				 {
					 if(imgNum < imgLen-1)
					 {
						 imgNum++;
					 }else
					 {
						 if(imgNum == imgLen-1)
						 {
							 imgNum = 0;
						 }
					 }
					 
					 $(object.scrollImgBox).eq(imgNum).fadeIn('slow');
					 $(object.scrollImgBox).eq(imgNum).siblings().fadeOut('slow');
					 $(object.tabDivList).eq(imgNum).addClass(object.thumbNowClass);
					 $(object.tabDivList).eq(imgNum).siblings().removeClass(object.thumbNowClass);	
				 }				 
				 
			}
			
			//主切换函数上一个
			function changeEffectPrev(){
				if( object.changeType == 'slide' ){
						if(imgNum > 0 ){ imgNum--; }else{
							if(imgNum == 0){
								$(object.scrollBox).css({'margin-left':-scrollWid*imgLen});
								imgNum  = imgLen-1;
							}
						}
										
						$(object.scrollBox).animate({'margin-left':-scrollWid*imgNum});						 	
				
						if( tabNum > 0 ){ tabNum --; }else{
								if( tabNum == 0 ){ 
									tabNum = imgLen-1;
								}
						}
						
						$(object.tabDivList).eq(tabNum).addClass(object.thumbNowClass);
						$(object.tabDivList).eq(tabNum).siblings().removeClass(object.thumbNowClass);								 
				 }
				 
				  //渐现效果
				 if(object.changeType == 'fadein')
				 {
					 if(imgNum > 0)
					 {
						 imgNum--;
					 }else
					 {
						 if(imgNum == 0)
						 {
							 imgNum = imgLen-1;
						 }
					 }
					 
					 $(object.scrollImgBox).eq(imgNum).fadeIn('slow');
					 $(object.scrollImgBox).eq(imgNum).siblings().fadeOut('slow');
					 $(object.tabDivList).eq(imgNum).addClass(object.thumbNowClass);
					 $(object.tabDivList).eq(imgNum).siblings().removeClass(object.thumbNowClass);	
				 }			
			}
			
			//是否循环和鼠标移动上清除滚动			
			if(object.flag == true){
				var s = setInterval(changeEffectNext,object.changeTime);				
				$(object.firstDiv).hover(
					function(){ clearInterval(s); },
					function(){ s = setInterval(changeEffectNext,object.changeTime); }
				 )
				$(object.tabDiv).hover(
					function(){ clearInterval(s); },
					function(){ s = setInterval(changeEffectNext,object.changeTime); }
				 )
				$(object.botPrev).bind("click",function(){
					clearInterval(s);
				}).bind("mouseover",function(){
					clearInterval(s);
				});
				$(object.botNext).bind("click",function(){
					clearInterval(s);
				}).bind("mouseover",function(){
					clearInterval(s);
				});
			}
			
			//点击调用函数下一个
			$(object.botNext).click(function()
				{
					changeEffectNext();								  
				})
			//点击调用函数上一个
			$(object.botPrev).click(function()
				{
					changeEffectPrev();								  
				})
			
			//任意点或者图片动作
			function changesmallImg(index)
			{				
				$(object.tabDivList).eq(index).addClass(object.thumbNowClass);
				$(object.tabDivList).eq(index).siblings().removeClass(object.thumbNowClass);
				if(object.changeType == 'slide')
				{
					$(object.scrollBox).animate({'margin-left':-scrollWid*index});	
				}
				if(object.changeType == 'fadein')
				{
					 $(object.scrollImgBox).eq(index).fadeIn('slow');
					 $(object.scrollImgBox).eq(index).siblings().fadeOut('slow');
				}
				imgNum = index;
				tabNum = index;
			}
			//点击
			if(object.thumbOverEvent == true)
				{
					$(object.tabDivList).click(function()
						{
							var index = $(this).index();
							changesmallImg(index);							
						})
				}	
				
			//鼠标浮动
			if(object.thumbOverEvent == false)
				{
					$(object.tabDivList).hover(function()
						{
							var index = $(this).index();
							changesmallImg(index);							
						})
				}
  		/*函数结尾*/	
		}						
	})
})(jQuery);