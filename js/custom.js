
// jquery
$(document).ready(function(){
	setTimeout(function() {
        $('body').addClass('loaded');
        $('.container-fluid').addClass('animation-left');
    }, 1000);

	$('#bars').click(function(){
		$(this).hide();
		$('.crossbar').show();
		$(".sidebar-left").animate({left: '0%'});
	});
	$('.crossbar').click(function(){
		$(this).hide();
		$('#bars').show();
		$(".sidebar-left").animate({left: '-100%'});
	});
  $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 3,
          nav: false
        },
        1000: {
          items: 3,
          nav: true,
          loop: false,
          margin: 20
        }
      }
    })
});

var lang = {
      "html": "98%",
      "css": "90%",
      "javascript": "60%",
      "php": "55%",
      "angular": "40%"
    };

    var multiply = 4;

    $.each( lang, function( language, pourcent) {

      var delay = 700;
      
      setTimeout(function() {
        $('#'+language+'-pourcent').html(pourcent);
      },delay*multiply);
      
      multiply++;

});
