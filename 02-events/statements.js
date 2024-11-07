// Events in JQuery

// Video solutions

$(document).ready(function () {
	$('#stream1_btn').on('click', function () {
		$('.stream1').removeClass('highlight_stream');
		$('.stream2').removeClass('highlight_stream');
		$('.stream3').removeClass('highlight_stream');
		$('.stream1').addClass('highlight_stream');
	});
	$('#stream2_btn').on('click', function () {
		$('.stream1').removeClass('highlight_stream');
		$('.stream2').removeClass('highlight_stream');
		$('.stream3').removeClass('highlight_stream');
		$('.stream2').addClass('highlight_stream');
	});
	$('#stream3_btn').on('click', function () {
		$('.stream1').removeClass('highlight_stream');
		$('.stream2').removeClass('highlight_stream');
		$('.stream3').removeClass('highlight_stream');
		$('.stream3').addClass('highlight_stream');
	});
});

// Challenge solutions

//waits until page is loaded first
$(document).ready(function () {
	//applies colour red to paragraphs when clicked on
	$('p').click(function () {
		$('p').css('color', 'red');
	});

	//will add lightblue to h2 elements
	$('h2').hover(function () {
		$('h2').css('background-color', 'lightblue');
	});

	/*
    this will apply larger font size to the active h2 element 
    by adding the h2_font_size class but 
    not the other h2 elements by removing class h2_font_size from them
    */
	$('#hr_html').hover(function () {
		$('#hr_mysql').css('font-size', '1em');
		$('#hr_python').css('font-size', '1em');
		$('#hr_jquery').css('font-size', '1em');
		$('#hr_django').css('font-size', '1em');
		$('#hr_css').css('font-size', '1em');
		$('#hr_html').css('font-size', '2em');
	});

	$('#hr_mysql').hover(function () {
		$('#hr_mysql').css('font-size', '2em');
		$('#hr_python').css('font-size', '1em');
		$('#hr_jquery').css('font-size', '1em');
		$('#hr_django').css('font-size', '1em');
		$('#hr_css').css('font-size', '1em');
		$('#hr_html').css('font-size', '1em');
	});

	$('#hr_python').hover(function () {
		$('#hr_mysql').css('font-size', '1em');
		$('#hr_python').css('font-size', '2em');
		$('#hr_jquery').css('font-size', '1em');
		$('#hr_django').css('font-size', '1em');
		$('#hr_css').css('font-size', '1em');
		$('#hr_html').css('font-size', '1em');
	});

	$('#hr_jquery').hover(function () {
		$('#hr_mysql').css('font-size', '1em');
		$('#hr_python').css('font-size', '1em');
		$('#hr_jquery').css('font-size', '2em');
		$('#hr_django').css('font-size', '1em');
		$('#hr_css').css('font-size', '1em');
		$('#hr_html').css('font-size', '1em');
	});

	$('#hr_django').hover(function () {
		$('#hr_mysql').css('font-size', '1em');
		$('#hr_python').css('font-size', '1em');
		$('#hr_jquery').css('font-size', '1em');
		$('#hr_django').css('font-size', '2em');
		$('#hr_css').css('font-size', '1em');
		$('#hr_html').css('font-size', '1em');
	});

	$('#hr_css').hover(function () {
		$('#hr_mysql').css('font-size', '1em');
		$('#hr_python').css('font-size', '1em');
		$('#hr_jquery').css('font-size', '1em');
		$('#hr_django').css('font-size', '1em');
		$('#hr_css').css('font-size', '2em');
		$('#hr_html').css('font-size', '1em');
	});

	//applies colour black to body background when mouse enters over buttons
	$('.bottom_button').mouseenter(function () {
		$('body').css('background-color', 'black');
	});

	//applies colour grey to body background when mouse leaves buttons
	$('.bottom_button').mouseleave(function () {
		$('body').css('background-color', '#eee');
	});
});

// Events in JQuery - Challenge 1

$(document).ready(() => {
	$('p').click(function () {
		$('p').css('color', 'red');
	});

	$('h2').hover(function () {
		$('h2').css('background', 'lightblue');
	});

	$('.card-panel').mouseenter(function () {
		$('body').css('background-color', 'black');
	});

	$('.card-panel').mouseleave(function () {
		$('body').css('background-color', '#e1e2e2');
	});
});

// JQuery Effects - Challenge 1

$(document).ready(function () {
	$('#card-panel-1').click(function () {
		$('#card-panel-1').hide('slow');
	});

	$('#card-panel-2').click(function () {
		$('#card-panel-2').hide('medium');
	});

	$('#card-panel-3').click(function () {
		$('#card-panel-3').hide('fast');
	});

	$('#card-panel-4').click(function () {
		$('#card-panel-4').hide(3000);
	});
});

// JQuery Effects - Challenge 2

$(document).ready(function () {
	$('#button-card-1').click(function () {
		$('#par-1').toggle('slow');
	});
	$('#button-card-2').click(function () {
		$('#par-2').toggle('medium');
	});
	$('#button-card-3').click(function () {
		$('#par-3').toggle('fast');
	});
	$('#button-card-4').click(function () {
		$('#par-4').toggle();
	});
});

// JQuery Effects - Challenge 3

$(document).ready(function () {
	$('#button-card-1').click(function () {
		$('#par-1').slideToggle(750);
	});
	$('#button-card-2').click(function () {
		$('#par-2').slideToggle(1000);
	});
	$('#button-card-3').click(function () {
		$('#par-3').slideToggle();
	});
});

// JQuery Effects - Challenge 4

$(document).ready(function () {
	$('#button-card-1').mouseenter(function () {
		$('#par-1').fadeTo(200, 0.5);
	});
	$('#button-card-1').mouseleave(function () {
		$('#par-1').fadeTo(200, 1);
	});

	$('#button-card-2').mouseenter(function () {
		$('#par-2').fadeTo(1000, 0.5);
	});
	$('#button-card-2').mouseleave(function () {
		$('#par-2').fadeTo(1000, 1);
	});
});

// Method Chaining

$('#myButton').removeClass('blueBox').addClass('border');
$('p').css('color', 'blue').slideUp(2000).slideDown(2000);

// Method Chaining - Challenge 1

$(document).ready(function () {
	$('button').mouseenter(function () {
		$('button').removeClass('make-red').addClass('make-border');
	});

	$('button').mouseleave(function () {
		$('button').removeClass('make-border').addClass('make-red');
	});
});

// Method Chaining - Challenge 2

$('#button-card-1').click(function () {
	$('#par-1').hide(2000).show(2000);
});

$('#button-card-2').click(function () {
	$('#par-2').fadeOut(1000).fadeIn(1000);
});

// The Importance of this - Challenge 1

$('p').click(function(){
	$(this).text("Changed only the text for this paragraph");
});

$('.card').mouseenter(function(){
	$(this).fadeTo(2000, 0.2).fadeTo(2000, 1);
});

// The Importance of this - Challenge 2

$(".module-nav").on("click", function(){
    let allModulesCardsSelector = ".card";
    let thisModuleCardsSelector = "." + this.id + "-card";
    $(allModulesCardsSelector).removeClass("card-highlight");
    $(thisModuleCardsSelector).addClass("card-highlight");
  });
  