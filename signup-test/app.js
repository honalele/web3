const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const https = require("node:https");

mailchimp.setConfig({
	apiKey: "193b7529d6a03e2496caeed6bde76e73-us5",
	server: "us5",
});

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
	const inputEmail = req.body.inpurEmail;
	const inputPassword = req.body.inputPassword;
	const companyName = req.body.companyName;

	if (companyName === "id1") {
		companyNameJP = "広島皮膚科";
	} else {
		companyNameJP = "マリポサビューティークリニック";
	}

	const data = {
		members: [
			{
				email_address: inputEmail,
				status: "subscribed",
				merge_fields: { FNAME: companyNameJP },
			},
		],
	};

	const jsonData = JSON.stringify(data);
	const url = " https://us5.api.mailchimp.com/3.0/lists/a3519bb044";

	const options = {
		method: "POST",
		auth: "naren1:193b7529d6a03e2496caeed6bde76e73-us5",
	};

	const request = https.request(url, options, function (response) {
		response.on("data", function (data) {
			console.log(JSON.parse(data));
		});

		if (response.statusCode === 200) {
			res.sendFile(__dirname + "/success.html");
		} else {
			res.sendFile(__dirname + "/failure.html");
		}
	});
	request.on("error", (e) => {
		console.error(e);
	});

	request.write(jsonData);
	request.end();
});

app.listen(process.env.PORT || 3000, function () {
	console.log("Sign up server is now running on our port");
});

//api key: 193b7529d6a03e2496caeed6bde76e73-us5
//audience ID: a3519bb044
