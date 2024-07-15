
$(function() {
  $('.header').hide().delay(200).fadeIn(500);
	$('.nav').hide().delay(500).fadeIn(1000);

	$('.links').eq(0).click(function() {
		$('.mainContent').empty();

		let $About = "<p>The 2022 FIFA World Cup is an international association football tournament contested by the men's national teams of FIFA member associations. The 22nd FIFA World Cup, it is taking place in Qatar from 20 November to 18 December 2022. This is the first World Cup to be held in the Arab world, and the second held entirely in Asia after the 2002 tournament in South Korea and Japan." ;
		$('.mainContent').html($About);
	})

	$('.links').eq(1).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('.section').empty();
	let $video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/oM0Je0MLVI0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		$('.mainContent').html($video);


	})

	$('.links').eq(2).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('.mainContent').empty();
		let $nyphoto = '<img src="people.jpeg" border=2>';

		$('.mainContent').html($nyphoto);
    $('.mainContent').hide().delay(200).fadeIn(500);

	})

	$('.links').eq(3).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('.mainContent').empty();
		let $concerts = ' <img src="schedule.jpg">';
		$('.mainContent').html($concerts);
    $('.mainContent').hide().delay(200).fadeIn(500);
	})



});
