jQuery(document).ready(function($) {    
    $('.cup').animate({'top':'-780px'},800, function() {
        $('.conf').fadeIn(1000, function() {
            $('.conf2').fadeIn(500, function() {
                $('.bg_lt').animate({'left':'1150px'},1000);
                $('.bg_rt').animate({'left':'-1500px'},1000, function() {
                    $('.one').fadeIn(1000, function() {
                        $('.two').fadeIn(1000, function() {
                            $('.three').fadeIn(1000, function() {
                                $('.port_lg').fadeIn(1000);
                                $('.dal_lg').fadeIn(1000, function() {
                                    $('.text').fadeOut(function() {
                                        $('.bg_lt').animate({'left':'-1150px'},3000);
                                        $('.bg_rt').animate({'left':'1500px'},3000);  
                                        $('.port_lg').animate({'left':'-1150px'},2000);
                                        $('.dal_lg').animate({'left':'1500px'},2000);
                                        $('.bg2').css('display', 'block');                                              
                                    });
                                });
                            });
                        });
                    });    
                });
            });
        });
    }); 
});




// jQuery(document).ready(function($) {  
//     $(window).scroll(function(){
//         if  ($(window).scrollTop() > 300)
//             $('.cup').animate({'top':'0px'},500);
//             else
//             $('.cup').stop(true).animate({'top':'-230px'},500);   
//         });
//         $('.cup .close').bind('click',function(){
//             $(this).parent().remove();  
//     });
// });