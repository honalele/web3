var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keypress(function () {
	if (!started) {
		$("#level-title").text("Level " + level);
		nextSequence();
		started = true;
	}
});

$(".btn").click(function () {
	var userChosenColour = $(this).attr("id");
	userClickedPattern.push(userChosenColour);

	playSound(userChosenColour);
	animatePress(userChosenColour);

	//2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
	checkAnswer(userClickedPattern.length - 1);
});

function paySound(name) {
	const audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
}

function nextSequence() {
	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);
	paySound(randomChosenColour);
	$("#" + randomChosenColour)
		.fadeIn(100)
		.fadeOut(100)
		.fadeIn(100);
	playSound(randomChosenColour);
}
function animatePress(currentColour) {
	var id = "#" + currentColour;
	$(id).addClass("pressed");
	setTimeout(function () {
		$(id).removeClass("pressed");
	}, 100);
}

$("body").keypress(function (event) {
	console.log(event.key);
	if (event.key === "a") {
		nextSequence();
	} else alert("you pressed " + event.key);
});

function checkAnswer(currentLevel) {
	console.log(userClickedPattern[currentLevel - 1]);
	if (userClickedPattern === gamePattern) {
		alert("Correct");
	} else {
		console.log("Sucess");
	}
	console.log("gamepattern:" + gamePattern);
}

$(".btn").click(function (event) {
	var userChosenColour = event.target.id;
	userClickedPattern.push(userChosenColour);
	paySound(userChosenColour);
	animatePress(userChosenColour);
	level++;
	$("#level-title").text("Level " + level);
	console.log("userclickedpattern: " + userClickedPattern);
	checkAnswer(level);
});

function playSound(name) {
	var audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
}
