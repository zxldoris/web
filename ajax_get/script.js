$(function () {
    // 显示 隐藏 toggle
    $("#get_msg_do").click(function () {
        var iphone = $("#iphone").val();
        var url="http://maizi.itpaimai.com/jquery/get/";
        var data = {phone:iphone};
        $.get(url,data,function (msg){
            if (msg.errNum == "-1"){
                $("#get_msg").text(msg.retMsg);
            } else{
                $("#get_msg").text(msg.retData.supplier+':')
            }
        },"jsonp");
            
        });
});