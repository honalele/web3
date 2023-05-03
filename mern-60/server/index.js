const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
	"mongodb+srv://user:password@cluster0.sscw8de.mongodb.net/test"
);

app.listen(3001, () => {
	console.log("Server is running!");
});
