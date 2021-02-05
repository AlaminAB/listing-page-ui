// nav 
let navLink= $(".nav-link");

function activeHides(){
    for(let a=0; a<navLink.length;a++){
       
        $(".nav-link").removeClass("active");
       }
}
$('.nav-link').click(function(){
    activeHides()
$(this).addClass("active");
$("#navbarNav").removeClass("show")
})


$('.navbar-toggler').click(function(){
    $('#navbarSupportedContent').css('left','0%')
    $('#navbarSupportedContent').removeClass('animate-nav')
})
$('.fa-times').click(function(){
    $('#navbarSupportedContent').addClass('animate-nav')
})

$(".nav-link").click(function(){
    $('#navbarSupportedContent').addClass('animate-nav')
})

$('.video-a').fancybox({
  
});
    document.addEventListener("scroll", function () {
      $(".nav-bar-top").offsetTop;
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        $(".nav-bar-top").addClass("stickys")
       
      } else {
        $(".nav-bar-top").removeClass("stickys")
        $(".home-none").removeClass("active");
      }



    })
    $(document).ready(function () {
      $(".fancybox").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',

        helpers: {
          title: {
            type: 'inside'
          }
        }
      });
    });
    $('.testimonial-wrap').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  prevArrow:'<i class="fal fa-arrow-left"></i>',
  nextArrow:'<i class="fal fa-arrow-right"></i>',
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }
    
  ]
});
