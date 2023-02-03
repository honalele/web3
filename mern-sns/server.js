const express = require("express");
const app = express();
const PORT = 3000;
const userRoute = require("./routes/users");

app.get("/", (req, res) => {
	res.send("Hello, express");
});

//ミドルウェア
app.use("/api/users", userRoute);

app.listen(PORT, () => console.log("サーバーが起動しました！"));
