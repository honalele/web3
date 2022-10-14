const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
	//res.send("<h1>Hello, Naren</h1>");
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
	console.log(req.body.num1);
	var num1 = req.body.num1;
	var num2 = req.body.num2;
	total = num1 + num2;
	res.send(total);
});

app.listen(3000, function () {
	console.log("Calculator challenge done!");
});
