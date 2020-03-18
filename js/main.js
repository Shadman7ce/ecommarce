// Bootstrap Tooltip Activator
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// Owl Carousel Activator Code
$(function () {
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    dots: false,
	    autoplay: true,
	    autoplayTimeout: 5000,
	    autoplayHoverPause: true,
	    animateIn: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
});

// My Account Page Menu Activatation
$(function() {

	$('.update-profile').show();
	$('.shipping-address').hide();

	$('.up-profile').click(function(){
		$('.up-profile ').addClass('active');
		$('.ship-address').removeClass('active');
		$('.update-profile').show();
		$('.shipping-address').hide();
	});

	$('.ship-address').click(function(){
		$('.up-profile ').removeClass('active');
		$('.ship-address').addClass('active');
		$('.update-profile').hide();
		$('.shipping-address').show();
	});

});