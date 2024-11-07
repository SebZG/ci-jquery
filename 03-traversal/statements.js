// Traversing Up and Down the DOM Tree

//wait until page is ready
$(document).ready(function () {
	//sets <a> element within paragraph  to yellow
	$('p').click(function () {
		$(this)
			.children('a')
			.css(
				'background-color',
				'yellow',
			); /* returns all the <a> child elements that are 
		within this paragraph*/
	});
});

// Traversing Up and Down the DOM Tree - Challenge 1

$('p').click(function () {
	$(this).children('a').css('background-color', 'yellow');
});

// Traversing Sideways

//wait until page is ready
$(document).ready(function () {
	//sets <a> element within paragraph  to yellow
	$('p').click(function () {
		$(this)
			.children('a')
			.css(
				'background-color',
				'yellow',
			); /* returns all the <a> child elements that are 
		within this paragraph*/
	});

	// Toggle the visibility of the paragraph when a button is clicked
	$('button').click(function () {
		$(this).next().slideToggle('slow');
	});
});

// Traversing Sideways - Challenge 1

$('button').click(function () {
	$('button').click(function () {
		$(this).next().slideToggle('slow');
	});
});

// Traversing Sideways - Challenge 2

$('button').click(function () {
	$(this).prev().slideDown();
});

$('h2').click(function () {
	$(this).next().children('p').slideUp();
});

// Other Traversing Methods - Challenge 1

$('#reset').click(function () {
	$(this)
		.siblings()
		.children()
		.removeClass('red')
		.removeClass('yellow')
		.removeClass('green')
		.removeClass('large-font');
});

$('#card-btn-1').click(function () {
	$(this).siblings('span').addClass('yellow');
});

$('#card-btn-2').click(function () {
	$(this).siblings('#card-par-1').addClass('red');
});

$('#card-btn-3').click(function () {
	$(this).siblings().addClass('large-font');
});

// Other Traversing Methods - Challenge 2

$('#reset').click(function () {
	$(this)
		.siblings()
		.children()
		.removeClass('red')
		.removeClass('yellow')
		.removeClass('green')
		.removeClass('large-font');
});

$('#card-btn-1').click(function () {
	$('#card p').first().addClass('red');
});

$('#card-btn-2').click(function () {
	$('#card p').last().addClass('yellow');
});

$('#filter').click(function () {
	$('p').filter('.special').addClass('green');
});

// Other Traversing Methods - Challenge 3

$('.side-heading').click(function () {
	$('.side-heading').siblings().removeClass('highlight');
	$(this).siblings().addClass('highlight');
});
