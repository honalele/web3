var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = new Array();
var userClickedPattern = new Array();
var level = 0;

function paySound(name) {
	const audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
}

function nextSequence() {
	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);
	paySound(randomChosenColour);

	return randomChosenColour;
}
function animatePress(currentColour) {
	var id = "#" + currentColour;
	$(id).addClass("pressed");
	setTimeout(function () {
		$(id).removeClass("pressed");
	}, 100);
	console.log(id);
}

var id = "#" + nextSequence();
$(id).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

$(".btn").click(function (event) {
	var userChosenColour = event.target.id;
	userClickedPattern.push(userChosenColour);
	paySound(userChosenColour);
	animatePress(userChosenColour);
	level++;
	$("#level-title").text("Level " + level);
	console.log(level);
	console.log(userClickedPattern);
});

$("body").keypress(function (event) {
	console.log(event.key);
	if (event.key === "a") {
		nextSequence();
	} else alert("you pressed " + event.key);
});

function checkAnswer(currentLevel) {
	currentLevel;
}
