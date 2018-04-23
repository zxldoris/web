// 第一步：
$(function () {
    $(".m_control img").click(function () {
        var src = $(this).attr("src");
        $(".m_view img").attr("src",src);
    });
});


// 第二步：
//    $(function(){
//        $("ul>li>img").click(function(){
//            var src = $(this).attr('src')
//            alert(src);
//        });
//    })
// 第三步：
// $(function () {
//     $("ul>li>img").click(function () {
//         $('#jingshan').attr('src', $(this).attr('src'));
//     });
// });