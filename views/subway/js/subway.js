$(function(){
	var $originLine=$("#originLine"),$destinationLine=$("#destinationLine"),
	$origin=$("#origin"),$destination=$("#destination"),
	$search_btn=$("#search_btn"),$search_iframe=$("#search_iframe"),
	msg_err="不要搞笑，你确定你需要地铁么？\n童鞋，始末站不能一样";
	$originLine.val(1);
	$destinationLine.val(1);
	$search_iframe.attr("src","");
	$search_btn.on('click',function(){
		var origin = $origin.val();
		var destination = $destination.val();
		if(origin==null||destination==null){
			alert(msg_err);return;
		}
		if(origin!=destination){
			var link="http://wx.kanzhun.com/activity/subway/result/"+origin+"-"+destination;
			$search_iframe.attr("src",link);return;
		}else{
			alert(msg_err);return;
		}
	});
	$originLine.change(function(){
		$origin.empty(); 
		var link="json/"+$originLine.val()+".json";
		getSubWayJson(link,0);
	});
	$destinationLine.change(function(){
		$destination.empty();
		var link="json/"+$destinationLine.val()+".json";
		getSubWayJson(link,1);
	});
	function getSubWayJson(link,val){
		$.getJSON(link,function(resp){
			var optionList = '';
			for(var i =0;i< resp.data.length;i++){
				var data = resp.data[i];
				optionList+= '<option value="'+ data.id +'">'+ data.name+'</option>'
			}
			val==0?$origin.html(optionList):$destination.html(optionList);
		});
	}
});