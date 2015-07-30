window.onload = function(){ 
     var html= "<div class=\"comwidth clearfix\">"
+ "        <h1 class=\"pull-left logo\"><a href=\"http://www.letvcloud.com/\" target=\"_top\"><img src=\"../../assets/images/logo.png\" alt=\"logo\"></a></h1>"
+ "        <ul class=\"pull-left navbar\">"
+ "            <li><a href=\"http://www.letvcloud.com/\" target=\"_top\">首页</a></li>"
+ "            <li>"
+ "                <a href=\"javascript:;\" class=\"le-header-uc-link\">产品<i class=\"drop\"></i></a>"
+ "                <div class=\"le-header-uc-items items-product clearfix\">"
+ "                    <ul class=\"item clearfix\">"
+ "                        <li><a href=\"http://www.letvcloud.com/vod.html\" target=\"_top\">云点播</a></li>"
+ "                        <li><a href=\"http://www.letvcloud.com/live.html\" target=\"_top\">云直播</a></li>"
+ "                        <li><a href=\"http://www.letvcloud.com/cdn.html\" target=\"_top\">CDN</a></li>"
+ "                        <li><a href=\"http://www.letvcloud.com/data.html\" target=\"_top\">Data+</a></li>"
+ "                    </ul>"
+ "                    <i class=\"arrow\"></i>"
+ "                </div>"
+ "            </li>"
+ "            <li><a href=\"http://help.letvcloud.com/\" target=\"_top\">帮助与支持</a></li>"
+ "            <li><a href=\"http://www.letvcloud.com/about.html\" target=\"_top\">关于</a></li>"
+ "        </ul>"
+ "        <div class=\"pull-right user\" style=\"display: none\" id=\"Login_n\">"
+ "            <div class=\"pull-left icon-nav-tel link-white pl-20\">400-055-6060</div>"
+ "            <div class=\"pull-left link-gray6 login\">"
+ "                <a href=\"/login.do\" target=\"_top\">登录</a>"
+ "                <a href=\"/registerView/registerUserView.do\" target=\"_top\">注册</a>"
+ "            </div>"
+ "        </div>"
+ "        <div class=\"pull-right user\" style=\"display: none\" id=\"Login_y\">"
+ "            <div class=\"pull-left icon-nav-tel link-white pl-20\">400-055-6060</div>"
+ "            <div class=\"pull-left logined\">"
+ "              <a href=\"javascript:;\"class=\"le-header-uc-link\"><i class=\"icon-user\"></i><i class=\"drop\"></i></a>"
+ "              <div class=\"le-header-uc-items items-user clearfix\">"
+ "                <p class=\"info\">欢迎您<br><a href=\"/userView/ucOverview.do\" target=\"_top\" id=\"username\">99143215@qq.com</a></p>"
+ "              <ul class=\"item clearfix\">"
+ "                <li><a href=\"/userView/ucOverview.do\" target=\"_top\">用户中心</a></li>"
+ "                <li><a href=\"/messageView/msgCenterView.do\" target=\"_top\">消息(<span id=\"count\">10</span>)</a></li>"
+ "                <li><a href=\"/logout.do\" target=\"_top\">退出</a></li>"
+ "              </ul>"
+ "              <i class=\"arrow\"></i>"
+ "              </div>"
+ "              <a href=\"javascript:;\" class=\"le-header-uc-link\" id=\"le-control-menus\" >控制台<i class=\"drop\"></i></a>"
+ "            </div>"
+ "        </div>"
+ "    </div>";
    //在得到的第一个元素之前插入
    var divObj = document.createElement("div");
    divObj.setAttribute("class","le-head-uc tm");
    divObj.setAttribute("id","le-head-uc");
    divObj.innerHTML=html;
    document.body.insertBefore(divObj,document.body.firstChild); 
    //先引入jquery 让后面的header.js跑起来
    var bsa = document.createElement('script'); 
    bsa.type = 'text/javascript'; 
    bsa.src = 'http://libs.baidu.com/jquery/1.11.1/jquery.min.js'; 
    (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(bsa);
    //延时引入header
    setTimeout(function(){
        var username = $("#username"),
            messagecount = $("#count"),
            manage = $("#le-control-menus"),
            commom_header_fn=function(){
                var le_head_uc=$("#le-head-uc"),
                le_head_uc_link=le_head_uc.find(".le-header-uc-link"),
                le_head_uc_items=le_head_uc.find(".le-header-uc-items");
                le_head_uc.on("click",".le-header-uc-link",function(){
                    var target=$(this),
                        target_next_items=target.next(".le-header-uc-items");
                    le_head_uc_link.not(target).removeClass("active");
                    le_head_uc_items.not(target_next_items).removeClass("active");
                    target.toggleClass("active");
                    target_next_items.toggleClass("active");
                });
                //鼠标点击网页空白处 关闭顶部已展开的headerbar
                $(document).mouseup(function(e){
                    if(!le_head_uc_link.is(e.target) && le_head_uc_link.has(e.target).length === 0 && le_head_uc_link.hasClass("active")){
                        le_head_uc_link.removeClass("active");
                        le_head_uc_items.removeClass("active");
                    }
                });
            };
        //显示已登录 这里可以换成ajax
        $("#Login_y").removeAttr("style");
        commom_header_fn();//调用header展开
    },100);
}