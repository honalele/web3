//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lodash = require("lodash");

const homeStartingContent =
	"Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
	"Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
	"Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = [];
posts.push({ blogTitle: "Home", blogBody: homeStartingContent });

app.get("/", function (req, res) {
	res.render("home", {
		posts: posts,
	});
});

app.get("/about", function (req, res) {
	res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", function (req, res) {
	res.render("contact", { contactContent: contactContent });
});

app.get("/compose", function (req, res) {
	res.render("compose");
});

app.post("/compose", function (req, res) {
	const blogPost = {
		blogTitle: req.body.postTitle,
		blogBody: req.body.postBody,
	};

	posts.push(blogPost);

	res.render("home", {
		posts: posts,
	});
});

function getLowerTitle(title) {
	titleLowers = lodash.lowerCase(title).split(" ");
	titleLowerResult = "";
	for (var i = 0; i < titleLowers.length; i++) {
		if (i === 0) {
			titleLowerResult = titleLowers[i];
		} else {
			titleLowerResult = titleLowerResult + "-" + titleLowers[i];
		}
	}
	return titleLowerResult;
}

app.get("/post/:postID", function (req, res) {
	postIDLowerResult = getLowerTitle(req.params.postID);
	console.log(postIDLowerResult);
	titleFound = false;
	posts.forEach(function (post) {
		blogTitleLower = getLowerTitle(post.blogTitle);
		if (blogTitleLower === postIDLowerResult) {
			titleFound = true;
			res.render("post", {
				title: post.blogTitle,
				body: post.blogBody,
			});
		}
	});

	if (!titleFound) {
		console.log("Not a match!");
	}
});

app.listen(3000, function () {
	console.log("Server started on port 3000");
});
