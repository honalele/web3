var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = new Array();

function nextSequence() {
	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);
	return randomChosenColour;
}

var id = "#" + nextSequence();
$(id).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

$("#red").click(function () {
	const audio = new Audio("sounds/red.mp3");
	audio.play();
});

$("#blue").click(function () {
	const audio = new Audio("sounds/blue.mp3");
	audio.play();
});

$("#yellow").click(function () {
	const audio = new Audio("sounds/yellow.mp3");
	audio.play();
});

$("#green").click(function () {
	const audio = new Audio("sounds/green.mp3");
	audio.play();
});
