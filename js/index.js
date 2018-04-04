
//天猫超市
{
    let type=$(".jinri_head li");
    type.each(function(index){
        $(this).mouseenter(function(){
            type.removeClass("active").parent().find(this).addClass("active");
            let index=$(this).index(".jinri_head li");
            $(".jinri_item").siblings().removeClass("active").eq(index).addClass("active");
        })
    })
}
 
        //leftbar、topbar
        {
            //返回顶部
            $(".leftbar_list li:last-child").click(function () {
                $("html,body").animate({scrollTop:0});
            });
            //
            $(window).scroll(function () {
                let st=$(window).scrollTop();
                if(st>700){
                    $(".leftbar").show();
                }else{
                    $(".leftbar").hide();
                }
                if(st>900){
                    $(".topbar").show();
                }else{
                    $(".topbar").hide();
                }
            })
            $(".leftbar_menu").click(function(){
                let index=$(this).index(".leftbar_menu");//index(".tips")加入类名更精确获取，免除其他div的影响
                let ot=$(".chaoshi").eq(index).offset().top-150;
                $("html,body").animate({scrollTop:ot},200);
            })
            $(window).scroll(function () {
                let st=$(window).scrollTop();
                $(".chaoshi").each(function(index,ele){
                    if(st>=$(this).offset().top){
                        $(".leftbar_menu").removeClass("active").eq(index).addClass("active");
                    }
                })
            })
        }
//banner
{
    let pagers=$(".banner_pagers li");
    let imgs=$(".banner_img_box");
    let n=0;
    let m=3000;
    function move(){
        n++;
        if (n===imgs.length) {
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        pagers.removeClass("active").eq(n).addClass("active");
        imgs.removeClass("active").eq(n).addClass("active");
        switch (n){
            case 0:$(".banner_content").css("background","#E8E8E8");
                // console.log($(".banner_content").eq(n).css("background","#E8E8E8"))
                break;
            case 1:$(".banner_content").css("background","#150F3E");
                break;
            case 2:$(".banner_content").css("background","#A8D7DD");
                break;
            case 3:$(".banner_content").css("background","#E8E8E8");
                break;
            case 4:$(".banner_content").css("background","#B92530");
                break;
            case 5:$(".banner_content").css("background","#E8E8E8");
                break;
        }
        if(obj.t===300)
            obj.t=30;
        else if(obj.t===30)
            obj.t=300;
        $(window).animate(obj,3000,move);
        flag=true;
    }
    pagers.mouseenter(function(){
        pagers.removeClass("active").parent().find(this).addClass("active");
        let index=$(this).index();
        imgs.removeClass("active").eq(index).addClass("active");
        switch (index){
            case 0:$(".banner_content").css("background","#E8E8E8");
                // console.log($(".banner_content").eq(n).css("background","#E8E8E8"))
                break;
            case 1:$(".banner_content").css("background","#150F3E");
                break;
            case 2:$(".banner_content").css("background","#A8D7DD");
                break;
            case 3:$(".banner_content").css("background","#E8E8E8");
                break;
            case 4:$(".banner_content").css("background","#B92530");
                break;
            case 5:$(".banner_content").css("background","#E8E8E8");
                break;
        }
        n=index;
    });
    var obj = {t:300};
    $(window).animate(obj,3000,move);
    $(window).mouseenter(function () {
        $(window).stop();
    });
    $(window).mouseleave(function () {
        $(window).animate(obj,3000,move);
    });
}
//banner侧边框
{
    let labels=$(".banner_list li");
    labels.each(function (index) {
        $(this).mouseenter(function(){
            $(".banner_panel").css("display","none");
            $(".banner_panel").eq(index).css("display","block");
        })
        $(this).mouseleave(function(){
            $(".banner_panel").css("display","none");
        })
    })
}
//nav
//rightbar
{
    let flag=true;
    $(".tab").each(function(index){
        $(this).mouseenter(function(){
            if(flag===true){
                flag=false;
                $(".tanchu_box").eq(index).css("display","block");
                $(".tanchu_box").eq(index).animate({"left":"35px"},300);
            }
        })
        $(this).mouseleave(function(){
            if(flag===false) {
                flag = true;
                $(".tanchu_box").eq(index).animate({"left": 0}, 300);
                $(".tanchu_box").eq(index).hide(10);
            }
        })
    })

}