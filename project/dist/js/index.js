

window.onload=function(){

    init();

}

//初始化
function init(){

    // 地区选择
    select_area();

    //弹窗关闭
    close_popup();

    //弹出二维码添加
    popup_code();

}


//顶部地区选择
function select_area(){
    var onoff=true;
    $('.top_tab li').eq(0).on('click',function () {
        if(onoff){
            $('.area').css({'display':'block'});
            onoff=!onoff;
        }else{
            $('.area').css({'display':'none'});
            onoff=!onoff;
        }
    });
}


//弹窗关闭
function close_popup(){
    $('.close_popup').on('click',function () {

        $('.popup').css('display','none');

    });
}

//弹出二维码添加
function popup_code(){

    $('.content .contact').on('click',function () {

        var scro_top=$(window).scrollTop();

        // $('.popup .popup_wrap').css('top',scro_top);

        $('.popup').css({'display':'block','zIndex':9999});

        // $('.parent').css({'position':'absolute','top':0,'left':0});
        // $('html').css({'zIndex':-1});
        
    });

    $(window).scroll(function() {

        // var scro_top=$(window).scrollTop();
        // $('.popup .popup_wrap').css('top',scro_top);
    });



}




