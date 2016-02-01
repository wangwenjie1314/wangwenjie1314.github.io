//实现全兼容placeholder add by wwj 2014-02-08 09:54:32
//判断浏览器是否支持 placeholder属性
function isPlaceholder(){
	var input = document.createElement('input');
	return 'placeholder' in input;
}
if (!isPlaceholder()) {//不支持placeholder 用jquery来完成
	$(document).ready(function() {
	    if(!isPlaceholder()){//把input绑定事件 排除password框
	        $("input").not("input[type='password']").each(
	            function(){
	                if($(this).val()=="" && $(this).attr("placeholder")!=""){
	                    $(this).val($(this).attr("placeholder"));
	                    $(this).focus(function(){
	                        if($(this).val()==$(this).attr("placeholder")) $(this).val("");
	                    });
	                    $(this).blur(function(){
	                        if($(this).val()=="") $(this).val($(this).attr("placeholder"));
	                    });
	                }
	        });
			var index=1;
			$("input[type='password']").each(
				function(){//对password框的特殊处理1.创建一个text框 2获取焦点和失去焦点的时候切换
					var pwdField= $(this);
					var pwdVal= pwdField.attr('placeholder');
					pwdField.after('<input id="pwdPlaceholder'+index+'" class="pwd_input_n" type="text" value='+pwdVal+' autocomplete="off" />');
					var pwdPlaceholder = $("#pwdPlaceholder"+index);
					index++;
					pwdPlaceholder.show();
					pwdField.hide();
			});
			$("input[class='pwd_input_n']").each(
				function(){
					var pwdPlaceholder=$(this);
					var pwdField=$(this).prev();//前一项
					pwdPlaceholder.focus(function(){
						pwdPlaceholder.hide();
						pwdField.show();
						pwdField.focus();
					});
					pwdField.blur(function(){
						if(pwdField.val() == '') {
							pwdPlaceholder.show();
							pwdField.hide();
						}
					});
			 });
	    }
	});
}