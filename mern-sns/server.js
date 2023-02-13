const express = require("express");
const app = express();
const PORT = 3000;
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");
const mongoose = require("mongoose");
require("dotenv").config();

//データベース接続
mongoose
	.connect(process.env.MONGOLURL)
	.then(() => {
		console.log("DBと接続中......");
	})
	.catch((err) => {
		console.log(err);
	});

app.get("/", (req, res) => {
	res.send("Hello, express");
});

//ミドルウェア
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);

app.listen(PORT, () => console.log("サーバーが起動しました！"));
