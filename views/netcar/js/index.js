var ie6 = !-[1, ] && !window.XMLHttpRequest;
$(function(){
nav_fixed();//吸顶导航
$(".li_img_txt").animate({left:"0px"},1000);//图片上文字初始化
$('.ban_box dl').imgScroll({firstDiv:'.ban_box',scrollBox:'.ban_box dl',scrollImgBox:'.ban_box dl dd',botPrev:'.ctr_prev',botNext:'.ctr_next',changeType:"slide",thumbNowClass:'on',thumbOverEvent:true,changeTime:5000,ImgBoxMar:0,flag:true});//首页焦点图
$(".li_img").each(function(){$(this).bind("mouseover",function(){$(this).find(".li_img_txt").css({left:"-240px"});$(this).find(".ban_pos_yy").stop().animate({top:"0px"},100)}).bind("mouseout",function(){$(this).find(".ban_pos_yy").stop().animate({top:"195px"},300);$(this).find(".li_img_txt").css({left:"0"})})});//阴影层
$("img.lazy").lazyload({effect : "fadeIn"});//异步加载img图片
var temp_click=[4];temp_click.push(0);//活动精选 初始化将0加入 这样不异步加载第一屏
var temp_tab=0;//活动精选鼠标点击
$(".lay_tabs li").each(function(){$(this).bind("click",function(){var ind=$(this).index();if(temp_tab!=ind){temp_tab=ind;$(".lay_tabs li").removeClass("on");$(this).addClass("on");$(".activity_list ul").hide();$(".activity_list ul:eq("+ind+")").fadeIn();var flsd=false;var click_len=temp_click.length;for(var i=0;i<click_len;i++){if(temp_click[i]==ind){flsd=true}else{temp_click.push(ind)}}temp_click=unique(temp_click);var temp_toped=$("#nest_link_gotop").attr("flag");var toped=parseInt(temp_toped)+1;if(!flsd){$("img.load").lazyload({effect:"fadeIn"});$('html, body').animate({scrollTop:toped},0);$('html, body').animate({scrollTop:temp_toped},0)}else{$('html, body').animate({scrollTop:temp_toped},0)}$(".activity_line li").removeClass("on");$(".activity_line li:eq("+ind+")").addClass("on")}})});
$(".activity_list ul li").each(function(){$(this).bind("mouseover",function(){$(this).find(".ban_time").stop().animate({left:"0px"},300)}).bind("mouseout",function(){$(this).find(".ban_time").stop().animate({left:"-121px"},300)})})//鼠标放置在活动精选上 显示时间
$(".l_pwd").val("");$(window).scroll(function(){nav_fixed()});})
function unique(arr){var result=[],hash={};for(var i=0,elem;(elem=arr[i])!=null;i++){if(!hash[elem]){result.push(elem);hash[elem]=true}}return result}//去除重复项
function nav_fixed(){var t = document.documentElement.scrollTop || document.body.scrollTop;if (!ie6) {if (t >= 50) {$("#topNav").addClass("topNav_fixed");$(".banner").css("margin-top", "120px")} else {$("#topNav").removeClass("topNav_fixed");$(".banner").css("margin-top", "0px")}}}//吸顶导航