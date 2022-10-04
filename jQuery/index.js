// alert("Working");
//$(document).ready(function () {
//	$("h1").addClass("big-title margin-50");
//});

$("h1").addClass("margin-50");
$("h1").click(function () {
	$("h1").addClass("big-title margin-50");
});

$("button").on("click", function () {
	$("h1").toggle();
});
