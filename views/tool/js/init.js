// JavaScript Document
var keyline = 1;
var timems = true;

function $(e)
{
	return document.getElementById(e);
}
function FormatCode() {

	var js_source = $('content').value.replace(/^\s+/, '');
	var tabsize = $('tabsize') ? $('tabsize').value : 1;
	var tabchar = ' ';
	if (tabsize == 1) {
		tabchar = '\t';
	}
	if (js_source && js_source.charAt(0) === '<')
	{
		$('content').value = style_html(js_source, tabsize, tabchar, 80);
	} else
	{
		$('content').value = js_beautify(js_source, tabsize, tabchar);
	}
	
	return false;
}



function pack_js(base64) {
	var input = $('content').value;
	var packer = new Packer;
	if (base64) {
		var output = packer.pack(input, 1, 0);
	} else {
		var output = packer.pack(input, 0, 0);
	}
	$('content').value = output;
}

function decode() {
  var code = $('content').value;
  code = code.replace(/^eval/, '');
  $('content').value = eval(code);
}

function Empty() {
	$('content').value = '';
	$('content').select();
}
function GetFocus() {
	$('content').focus();
}

function getCount(str1,str2)
{
	return str1.match(/\str2/gi).length;
}
function linekeyup(e)
{
	e = e || window.event;
	if(e.keyCode == 13)
	{
		$('line').innerHTML = $('line').innerHTML + '<b>' + keyline + '</b>';
		keyline++;
	}
	else if(e.keyCode == 8)
	{
		if(keyline > 1)
		{
			scrollall();
			//keyline--;
		}
	}
}

function scrollii()
{
	$('line').scrollTop = $('content').scrollTop;
}

function scrollall()
{
	if(timems == true)
	{
		var count = $('content').value.split('\n').length + 1;
		if(count != keyline)
		{
			var tagB = [];
			$('line').innerHTML = '';
			for(i=1;i<count;i++)
			{
				tagB.push('<b>'+i+'</b>');
			}
			$('line').innerHTML = $('line').innerHTML + tagB.join('');
			keyline = count;
			timems = false;
			setTimeout('timems = true;',100);
		}
	}
}