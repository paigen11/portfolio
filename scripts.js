// On document ready:
$(document).ready(function(){

	$(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
	  });

	$('body').scrollspy({target: '.navbar', offset: 50});

	$('.myNavBar a').on('click', function(event){
		if(this.hash !== ''){
			event.preventDefault();
			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});

	$('.contact-form').submit(function(){
		$('.thank-you').text("Thanks for your note! I'll be in touch soon.");
		// return false;
	})
});

$(function(){

	// Instantiate MixItUp:

	$('.project-container').mixItUp();

});
