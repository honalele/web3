const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/bmicalculator", function (req, res) {
	//res.send("<h1>Hello, Naren</h1>");
	res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
	var weight = Number(req.body.weight);
	var height = Number(req.body.height);
	bmi = Math.floor(weight / height ** 2);
	res.send("Your BMI is " + bmi);
});

app.listen(3000, function () {
	console.log("Calculator challenge done!");
});
