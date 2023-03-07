// preloader

$(window).load(function(){
  $('.preloader').delay('100').fadeOut(100)
})
// work lightbox
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })

// work slider
$('.work-slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


// testimonial slick
$('.testimonial-slide').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// menu fixed
$('.back-to-top i').click(function(){
  $('html, body').animate({
    scrollTop:0
  },500)
})
$(window).scroll(function(){
  var scrolling = $(this).scrollTop()
  if(scrolling > 50){
      $('.main-header').addClass('navbar-fixed')
  }
  else{
      $('.main-header').removeClass('navbar-fixed')
    }
    if(scrolling > 20){
      $('.back-to-top i').fadeIn(500)
    }
    else{
      $('.back-to-top i').fadeOut(500)
    }
}) 