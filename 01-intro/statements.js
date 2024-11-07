/**
 * The set of statements that are executed in the browser console to try out
 * jQuery selectors
 */

// jQuery selectors

// Video solutions

// Select all of the anchor elements on the page using the `$` as shorthand
// for the `jQuery` function
$('a');

// The long version of the function
jQuery('a');

// Get all elements that contain a class of `card_image`
$('.card_image');

// Get all elements that contain an ID of `logoNav`
$('#logoNav');

// Get all anchors that are direct children of paragraphs
$('p>a');

// Get all anchor elements that are descendants of paragraphs
$('p a');

// Get all list item elements that are direct children of unordered lists
$('ul>li');

// Get all list item elements that are descendants of unordered lists
$('ul li');

// Get the first anchor element from the DOM
$('a:first');

// Get the last anchor element from the DOM
$('a:last');

// Select all header elements (h1, h2, h3, h4, h5, h6)
$(':header');

// Challenge solutions

// Get all img elements on the page
$('img');

// Get all elements with a class of `card_image`
$('.card_image');

// Get the footer by its ID
$('#my_footer');

// All paragrapgh elements in the `footer`
$('footer p');

// Get all header elements (h1-h6)
$(':header');

// Get first element on the page
$(':first');

// Get the last `div` on the page
$('div:last');

// Get the last `img` on the page
$('img:last');

// Get all elements that have an attribute of `href`
$('[href]');

// Changing HTML and CSS

// Video solutions

// Get the `background-color` of all paragraphs
$('p').css('background-color');

// Get the `font-family` of all paragraphs
$('p').css('font-family');

// Change the color of the text of all list item elements
$('li').css('color', 'red');

// Underline all h2 elements
$('h2').css('text-decoration', 'underline');

// Add a solid border of 1px and a color of `#ccc` to all unordered lists
$('ul').css('border', 'solid 1px #ccc');

// Get the HTML contained within an element with an ID of `my_footer`
$('#my_footer').html();

// Get the HTML contained within an element called `body`
$('body').html();

// Add a h1 to the `body` element
$('body').html(
	"<h1>This is my fancy new content. Thanks jQuery, you're the best!</h1>",
);

// Add new text to the footer
$('#my_footer').text('This is my fancy new text. Thanks again jQuery');

// Append a new element to the end of all of the elements contained in the
// element that has an ID of `myElement`
$('#myElement').append('<p>This is a new element</p>');

// Append a span containing the copyright to the footer
$('my_footer').append('<span>&copy; 2017.</span>');

// Challenge solutions

// Modify the contents of all of the paragraph elements on the page
$('p').text('New text');

// Changing HTML/CSS with jQuery - Challenge 1

$('p').text('All Changed');

// Changing HTML/CSS with jQuery - Challenge 2

// Append a span to every paragraph
$('p').append('<span>lorem ipsum</span>');

// Remove all links using the remove function
$('a').remove();

// Empty all div elements that have a class of card
$('div.card').empty();

// Changing HTML/CSS with jQuery - Challenge 3

let fontFamily = $('p').css('font-family');

$('h1').text(fontFamily);

$('.card-panel').css('background-color', 'green');

// Writing our first jQuery script Challenge 1

// Video solutions

$(document).ready(function () {});

// Challenge solutions

$(document).ready(function () {
	$('tr:odd').addClass('odd');
	$('tr:even').addClass('even');
});


////////

// Create a new script element
var script = document.createElement('script');

// Set the `src` attribute of the new script element
script.src = '//code.jquery.com/jquery-latest.min.js';

// Append the new script element to the head element of the page
document.head.appendChild(script);

// Find out the `font-family` of all paragraphs
$('p').css('font-family');

// Find out the `font-family` of all `h2` elements
$('h2').css('font-family');

// Change the text of each paragraph element to you name
$('p').text('Aaron');

/**
 * Stack Overflow
 */

// Create a new script element
var script = document.createElement('script');

// Set the `src` attribute of the new script element
script.src = '//code.jquery.com/jquery-latest.min.js';

// Append the new script element to the head element of the page
document.head.appendChild(script);

// Change the `background-color` of all paragraph elements
$('p').css('background-color', '#000');

// Change the `font-family` of all paragraph elements
$('p').css('font-family', 'Verdana');
