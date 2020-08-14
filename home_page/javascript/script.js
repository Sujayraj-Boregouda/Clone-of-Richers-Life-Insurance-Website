
   //side navbar//
    $('.btn').click(function(){
        $(this).toggleClass("click");
        $('.sidebar').toggleClass("show"); 
    });
    
    $('.serv-btn').click(function(){
        $('nav ul .serv-show').toggleClass("show1");
        $('nav ul .second').toggleClass("rotate");
    });
     
    $('nav ul li').click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    //side navbar//

    

    //Counterup//
    $(".counter-value").counterUp({delay:10, time:1000});
    //Counterup//