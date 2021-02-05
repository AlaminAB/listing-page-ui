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