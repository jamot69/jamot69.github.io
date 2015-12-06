function askQuestions() {

var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');

var fullName = firstName + ' ' + lastName;

console.log('User\'s name is: ' + fullName);
$('h2').text('Hello ' + fullName);

var age = prompt('How old are you?');

age = parseInt(age);
// next code where next action is conditional on their age - requires Comparisons (pg 49)

if (age >= 18) {

	console.log('User is an adult');
	alert('Welcome, adult!');
} else if(age >= 13) {

	console.log('User is a teenager');
	alert('Come back in a few years!');
} else {

	console.log('User is a child');
	alert('Go away, child!');

}
// if want the below to not be case senstitive then use firstName.toLowerCase()=== 'general' && lastName.toLowerCase()!=='assembly'
if (firstName == 'General' && lastName != 'Assembly') {
	console.log('User is a General, not an Assembly');
	alert('Welcome, General!');

}

var faveColour = prompt('What is your favourite colour?').toLowerCase();

if (faveColour =='red' || faveColour == 'green' ||
	faveColour == 'blue' || faveColour == 'yellow') {

	$('h1').css('color', faveColour);

	}

}

// When the page has loaded
$(function(){

	$('img').on('click',askQuestions);

	// Hide all the things
	$('h3').next().hide();

	// when the user clicks on an h3 - wait until it is clicked on
	$('h3').on('click',function() {

		// Close all the sections but one that is clicked on
		$('h3').not(this).next().slideUp(100);

		// Hide the next element - dom traversal - if you changed hide to toggle then it will make the element visable again. toggle is the code they have written otherwise would have to write an if else statement - i.e. if hidden bring back otherwise hide.
		// can also do slideToggle and insert something in () for speed otherwise leave blank

		$(this).next().slideToggle(150);

	});	

});