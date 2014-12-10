$(function(){
	//nav
	var $nav_li=$("#fd-nav li"),
		$nav_dl=$("#fd-nav dl");
	$nav_li.each(function(){
		$(this).bind("mouseenter",function(){
			$(this).addClass("on").siblings("li").removeClass("on");
			$nav_dl.hide();
			$(this).find("dl").show();
		}).bind("mouseleave",function(){
			$nav_li.removeClass("on");
			$nav_dl.hide();
		})
	});
	$('a').bind("focus", function(){$(this).blur();});
})