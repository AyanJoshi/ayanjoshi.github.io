$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Student.", "Builder.", "Decader^500.^500.", "Decoder."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false,
		smartBackspace: true,
		backSpeed: 70,
		backDelay: 700
	});

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});

	$('.chart').easyPieChart({
		//your options goes here
	});

});