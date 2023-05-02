const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect();

app.listen(3001, () => {
	console.log("Server is running!");
});
