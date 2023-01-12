//jshint esversion:6

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.static("public"));
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
	useNewUrlParser: true,
});

app.listen(3000, function () {
	console.log("Server started on port 3000");
});
