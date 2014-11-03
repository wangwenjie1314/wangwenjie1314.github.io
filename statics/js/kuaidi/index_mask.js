define(function(require, exports, module) {
	require('dialog');
	//require.async('gotop');
	var a=$("#kdTName"),b=$("#kdName"),c=$("#kdNum"),d=$("#kdSubBtn"),e=$("#queryResult"),f=$("#queryContext"),g=$("#mask-body .column-list a"),
		msg_a="提示：请您选择快递名称",
		msg_b="提示：请您填写快递单号",
		msg_err="查询失败，请检查快递名称和单号是否正确，请重试";
	a.bind("focus",function(){
		dialog.open();
	});
	g.each(function(){
		$(this).bind("click",function(){
			var val=$(this).text();
			var flag=$(this).attr("flag");
			if(b.val()!=flag){c.val("").focus()}
			a.val(val);
			b.val(flag);
			f.hide();
			dialog.close();
		});
	});
	d.bind("click",function(){
		var b_val=b.val();
		if(b_val==""||b_val==null){alert(msg_a);return;}
		var c_val=c.val();
		if(c_val==""||c_val==null){alert(msg_b);return;}
		$(this).addClass("btn-query-dis").html("查询ing");
		var json_link="http://www.kuaidi100.com/query?type="+b_val+"&postid="+c_val+"&id=&valicode=&temp=&callback=?";
		$.getJSON(json_link,function(data){
			if(data!=null){
				d.removeClass("btn-query-dis").html("查询");
				if(data.message!="ok"){
					alert(msg_err);return;
				}else{
					var dataLists=data.data,len=dataLists.length,temp_len=len-1,temp_state="",temp_last="",temp_val;
					if(len>0){e.empty();f.show();}
					for(var i=0;i<len;i++){
						if(i==0){temp_state="status-first"}
						else if(i==len-1){
							temp_last="last";
							if(data.state=="3"){temp_state="status-check";}else{temp_state="status-wait"}
						}else{
							temp_state="";
						}
						temp_val=temp_len-i;
						var temp_tr='<tr class="'+temp_last+'"><td class="row1">'+dataLists[temp_val].time+'</td>'+
							'<td class="status '+temp_state+'">&nbsp;</td><td>'+dataLists[temp_val].context+'</td></tr>';
						e.append(temp_tr);
						$("#queryResult tr:eq("+i+")").delay(100).fadeIn();
					}
				}
			}
		});
	});
});