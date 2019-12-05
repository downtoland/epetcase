
     /*定义位置：由于图片个数与下侧顺序按钮数量一致，可通过位置进行关联*/
    var index=0;
     /*当鼠标放到顺序按钮上时：
     1.将当前这个顺序按钮增加样式为红色背景
     2.移除周围其他同级元素红色背景样式
     3.获取当前顺序按钮的index
     4.通过index获取该位置图片
     5.一秒钟渐入该图片
     6.一秒钟渐出其他相邻图片
     7.防止移动过快导致的效果闪现，使用stop方法
     */
    $(".num li").mousemove(function () {
            $(this).addClass("current").siblings().removeClass("current");
            index=$(this).index();
            $(".b-pic li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
            
    });
     /*设置每一秒钟自动轮播：
     1.获取当前位置序号：自加操作；当超过图片最大序号时序号设置为0
     2.设置下侧顺序按钮及轮播图显示
     */
    var time=setInterval(move,1000);
    function move() {
        index ++;
        if (index === 3){
            index=0;
        }
        var arr = new Array();
        arr=["pink","blue","cyan"];
       
        $(".banner").css('background-color',arr[index]);
         
        $(".num li").eq(index).addClass("current").siblings().removeClass("current");
        $(".b-pic li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
        
    };
    /*当鼠标划入、划出轮播图区域时：
    1.划入时停止自动轮播
    2.划出时继续自动轮播
    */
    $(".ban-m").hover(function () {
        clearInterval(time);
    },
    function () {
        time=setInterval(move,1000);
    });

    //三级导航固定位置
    $(function (){
    　　$(".nav1 .nav1-l li").mouseenter(function ()
    　　{
    　　　　//获取点击的元素给其添加样式，讲其兄弟元素的样式移除
    　　　　$(this).addClass("active").siblings().removeClass("active");
    　　　
    　　　　$(this).children().css('display','block');
            $(this).siblings().children().css('display','none');
    　　});
    $(".nav1 .nav1-l li").mouseleave(function ()
    　　{
    　　　　//获取点击的元素给其添加样式，讲其兄弟元素的样式移除
    　　　　$(this).addClass("active").siblings().removeClass("active");
    　　　
    　　　　$(this).children().css('display','block');
            $(this).siblings().children().css('display','none');

    　　});
    });

    //tab选项卡
$(function ()
{
　　$(".top-r li").mouseenter(function ()
　　{
　　　　//获取点击的元素给其添加样式，讲其兄弟元素的样式移除
　　　　$(this).addClass("active").siblings().removeClass("active");
　　　　//获取选中元素的下标
　　　　var index = $(this).index();
　　　　$(this).parent().siblings().children().eq(index).addClass("active")
　　　　.siblings().removeClass("active");
　　});
});
  
    //弹出注册页面

