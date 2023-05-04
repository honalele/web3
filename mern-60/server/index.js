const express = require("express");
const mongoose = require("mongoose");
const app = express();
const UserModel = require("./models/Users");

const cors = require("cors");

app.use(cors());
app.use(express.json());

mongoose.connect(
	"mongodb+srv://narenbao:<password>@cluster0.sscw8de.mongodb.net/db_test"
);

app.get("/getUsers", (req, res) => {
	UserModel.find()
		.then((result) => {
			res.json(result);
		})
		.catch((err) => {
			res.json(err);
		});
});

app.post("createUser", async (req, res) => {
	const user = req.body;
	const newUser = new UserModel(user);
	await newUser.save();
	res.json(user);
});

app.listen(3001, () => {
	console.log("Server is running!");
});
