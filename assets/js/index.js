$(document).ready(function(){

	$('pre').addClass('prettyprint');
	
	mainImage = $('img[alt="main-image"]');
	
	if ( mainImage.length > 0){
		mainImageSource = mainImage.attr('src');
		$('header').css('background-image','url('+mainImageSource+')');
		mainImage.remove();
	}

});
