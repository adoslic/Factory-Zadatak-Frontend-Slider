$(document).ready(function(){
	
	var slider = $('.left');
	var count = $('.left section').children.length;
	var width = count * 100;

	slider.css('width', width + '%');

	var left = $('.left-arrow');
	var right = $('.right-arrow');

	right.on('click',function(){
		$('.left .img:first').insertAfter('.left .img:last');
		slider.css('margin-left', '-' + 100 + '%');

		$('.left .img2:first').insertAfter('.left .img2:last');
		slider.css('margin-left', '-' + 100 + '%');	
	});
	left.on('click',function(){
		$('.left .img:last').insertBefore('.left .img:first');
		slider.css('margin-left', '-' + 100 + '%');

		$('.left .img2:last').insertBefore('.left .img2:first');
		slider.css('margin-left', '-' + 100 + '%');
	});
});
