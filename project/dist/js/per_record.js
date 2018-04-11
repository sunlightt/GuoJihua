

//顶部tab切换
tab_change();
function  tab_change(){

     $('.container .section').eq(0).show().siblings().hide();

     $('.top_tab span').each(function(i , item){

          $(this).on('click',function(){


              $('.top_tab span').removeClass('active');
              $(this).addClass('active');
              $('.container .section').eq(i).show().siblings().hide();

          });

     });

}