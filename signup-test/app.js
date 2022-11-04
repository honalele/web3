const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
	var inputEmail = req.body.inpurEmail;
	var inputPassword = req.body.inputPassword;
	var companyName = req.body.companyName;

	console.log(inputEmail, inputPassword, companyName);
});

app.listen(3000, function () {
	console.log("Sign up server is now running");
});
