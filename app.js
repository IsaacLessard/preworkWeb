$(document).ready(function(){

	$('.menu li').mouseenter(function(){
		$(this).animate({
			padding:'+=5px'
		});
	});
	$('.menu li').mouseleave(function(){
		$(this).animate({
			padding: '-=5px'
		});
	});

	$('.front-img').mouseenter(function(){
		$(this).animate({
			height:'+=5px',
			width:'+=5px'
		});
	});
	$('.front-img').mouseleave(function(){
		$(this).animate({
			height:'-=5px',
			width:'-=5px'
		});
	});
	$('.gifBtn').click(function(){
		$('.gif').toggleClass('hidden');
	});

});