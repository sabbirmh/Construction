$(function () {
  'use strict';



  $('.engineer_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fas fa-long-arrow-alt-left prv_arr"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-right nxt_arr"></i>',

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },

      
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });




  $('.client_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });




  // manu fix

  var navOff = $('.main_menu').offset().top;

  $(window).scroll(function(){
    var scrolling = $(this).scrollTop()

    if(scrolling > navOff){
      $('.main_menu').addClass('menu_fix');
    }

    else{
      $('.main_menu').removeClass('menu_fix');
    }

  });


});