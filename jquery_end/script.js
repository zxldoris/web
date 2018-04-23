// 第一步：
//    $(function(){
//        alert('it work');
//    })
// 第二步：
//    $(function(){
//        $("ul>li>img").click(function(){
//            var src = $(this).attr('src')
//            alert(src);
//        });
//    })
// 第三步：
$(function () {
    var PICTURE_NUM = 7;
    // 获取img list
    var imgs_id_list = [];
    var imgs_list = [];
    for(i=0;i<PICTURE_NUM;i++){
        tmp_str = "#img" + (i+1);
        imgs_list[i] = $(tmp_str).attr('src');
        imgs_id_list[i] = '#' + $(tmp_str).attr('id');
    }
    var i = 0;

    $('#display').timer({
        duration: '2s',
        callback: function () {
            $(".m_view").mouseenter(function () {
                console.log("mouse enter");
                $('#display').timer('pause');
            });
            $(".m_view").mouseout(function () {
                console.log("mouse out");
                $('#display').timer('resume');
            });
            $("ul>li>img").click(function(){
                $('#display').attr('src',$(this).attr('src'));
            });
            if (i > 0)
                $(imgs_id_list[i - 1]).removeClass("style");
            if (i >= imgs_list.length) {
                i = 0;
            }
            $("#display").attr('src', imgs_list[i]);
            $(imgs_id_list[i]).addClass("style");
            var tmp = $("#display").attr('src');
            i = imgs_list.indexOf(tmp)+1;
        },
        repeat: true
    });
});