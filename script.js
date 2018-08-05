$(".home").click(function(){
    $("body, html").animate({scrollTop: 0}, 1000);
});

$(".apps").click(function(){
    $("body, html").animate({scrollTop: 665}, 1000);
});

$(".contact, .scroll-contact").click(function lol(){
    $("body, html").animate({scrollTop: 1700}, 1000);
});

//showing function

window.sr = ScrollReveal();
sr.reveal('h1, h3, .download',{delay: 430})

//Nav height

$(window).scroll(function(){
		   var top = $(window).scrollTop();
		   var find_class_small = $.contains('nav', '.small');

		   if(top > 50 && find_class_small == false) {
			$('nav').addClass('small');
		   }
		   else {
			$('nav').removeClass('small');
		   }

		  });