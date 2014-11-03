define(function(require, exports, module) {
	require('company'); 
	require.async('gotop');
	var companys=jsoncom.company;
  	var $container = $('#w-kd-item');
	$container.empty();
	for(var i=0,len=companys.length;i<len;i++){
		var a='<li class="item"><h2>'+companys[i].companyname+'</h2><p>'+companys[i].tel+'</p><p>'+companys[i].comurl+'</p></li>';
		$container.append(a);
	}
});