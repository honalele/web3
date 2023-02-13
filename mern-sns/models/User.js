const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			min: 3,
			max: 25,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			max: 50,
			unique: true,
		},
		profilePicuture: {
			type: String,
			default: "",
		},
		followers: {
			type: Array,
			default: [],
		},
		following: {
			type: Array,
			default: [],
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		desc: {
			type: String,
			max: 70,
		},
		city: {
			type: String,
			max: 50,
		},
	},
	{ timestamps: true }
);
