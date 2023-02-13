//jshint esversion:6

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.static("public"));

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
	useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
	name: String,
	rating: Number,
	review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);
/*
const fruit = new Fruit({
	name: "peach",
	rating: 10,
	review: "我最喜欢吃的水果",
});
*/
//fruit.save();

const fruit = new Fruit();
fruit.deleteOne({ name: "peach" });
fruit.save();

app.listen(3000, function () {
	console.log("Server started on port 3000");
});
