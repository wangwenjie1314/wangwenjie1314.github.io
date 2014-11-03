//弹窗Dialog
var mask_wrap=$("#mask-wrap"),
	mask_body=$("#mask-body"),
	mask_close=$("#mask-close"),
	mask_bg=$("#mask-bg"),
	mask_time;
mask_close.bind("click",function(){
	dialog.close();
});
mask_bg.bind("click",function(){
	dialog.close();
});
var dialog={
	open:function(){
		mask_wrap.show();
		mask_bg.animate({opacity:0.75},300);
		mask_body.animate({opacity:1,top:"50%"},300);
	},close:function(){
		mask_body.animate({opacity:0,top:"0"},200);
		mask_bg.animate({opacity:0},200);
		clearTimeout(mask_time);
		mask_time=setTimeout(function(){mask_wrap.hide();},150);
	}
}