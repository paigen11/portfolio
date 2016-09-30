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

	var animationDelay = 5000;

	animateHeadline($('.headline'));

	function animateHeadline($headlines){
		$headlines.each(function(){
			var headline = $(this);
			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible'))}, animationDelay);
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);
		switchWord($word, nextWord);
		setTimeout(function(){ hideWord(nextWord) }, animationDelay);
	}
	 
	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}
	 
	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}

});


$(function(){

	// Instantiate MixItUp:

	$('.project-container').mixItUp();

});
