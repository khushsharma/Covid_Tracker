$(document).ready(function()
{
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    } ,
    {
        offset: '60px;'
      });

   /* 
    scroll
   */
    $('.js--scroll-to-start').click(function(){
        $('html , body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });

    $('.js--yoyo').click(function(){
        $('html , body').animate({scrollTop: $('.js-live').offset().top},1200);
    });

    $('.js--rs').click(function(){
        $('html , body').animate({scrollTop: $('.js--resources').offset().top},1800);
    });

    $('.js--contact').click(function(){
        $('html , body').animate({scrollTop: $('.js--foot').offset().top},2000);
    });

}) ;