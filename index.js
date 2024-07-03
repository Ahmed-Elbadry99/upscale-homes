$(document).ready(function() {
 
    $(".owl-one").owlCarousel({
   
        pagination:false,
        dots:false,
        loop:true,
        responsive: {
            0: {
             items: 1
            },
            600: {
             items: 2
            },
            960: {
             items: 3
            },
            1200: {
             items: 3
            }
           },
        nav : true,
        navText:["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
        navSpeed:2000,
        margin:10   ,
    });
    $(".owl-two").owlCarousel({
   
        pagination:false,
        dots:false,
        loop:true,
        responsive: {
            0: {
             items: 2
            },
            600: {
             items: 3
            },
            960: {
             items: 4
            },
            1200: {
             items: 6
            }
           },
        
        
        margin:10   ,
        autoplay:true,
        smartSpeed:8000,
    });
   
  });
    
