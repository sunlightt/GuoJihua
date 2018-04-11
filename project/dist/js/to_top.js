
//tab切换

tab_change();

function tab_change(){

    $('.tab_container .section').eq(0).show().siblings().hide();

    $('.tab_change ul li').each(function(i ,item){

           $(this).on('click',function(){

                 $(this).addClass('active').siblings().removeClass('active');

                $('.tab_container .section').eq(i).show().siblings().hide();

           });
    });

}


