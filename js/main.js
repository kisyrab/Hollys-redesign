$(function(){
    //메뉴
    $(".main>li, .sub_bg").hover(function(){
        $(".sub, .sub_bg").stop().slideDown();
        // $(".sub").stop().show();
        // $(".sub_bg").stop().slideDown("fast");
    }, function(){
        $(".sub, .sub_bg").stop().slideUp();
        // $(".sub").stop().hide();
        // $(".sub_bg").stop().slideUp("fast");

    }) //menu hover


    $(".move").slick({
        autoplay:true,
        autoplaySpeed:3000,
        fade:true,
        dots:true,
        arrows:false,
        adaptiveHeight:true,
    });



    $(".close").click(function(){
        $(".popup").hide();
    });







}) //j