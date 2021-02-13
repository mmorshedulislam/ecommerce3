$(document).ready(function(){

	$('.menu-icon').click(function(){
		$(".mobile-menu").slideToggle();


	})

/*

	$('.others-menu-icon').click(function(){
		$('.mobile-menu').show();
	})

*/

	$('.fa-bars').click(function(){
		$(this).hide();
		$('.fa-times').show();
		$('.mobile-menu').show('slow');
	});

	$('.fa-times').click(function(){
		$(this).hide();
		$('.fa-bars').show();
		$('.mobile-menu').hide('slow');
	});






	var mixer = mixitup('.filtering');


	//Dropdown menu
	$('.dropdown-btn').click(function(){
		$('.dropdown-content > a').toggle();
	})

	//Tooltip
	$('[data-toggle="tooltip"]').tooltip();	  

	//Owl carousel 
	$(document).ready(function(){
	  $(".owl-carousel").owlCarousel();
	});







});