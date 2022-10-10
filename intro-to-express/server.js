const express = require("express");

const app = express();

app.get("/", function (req, res) {
	res.send("<h1>Hello, Naren and World</h1>");
});

app.get("/contact", function (req, res) {
	res.send("<p>Send me: naren.bao@aquaage.ai</p>");
});

app.get("/about", function (req, res) {
	res.send("<p>Here is the info about us</p>");
});

app.listen(3000, function () {
	console.log("Server is started at port 3000!");
});
