"use strict";

const express = require("express");

const app = express();
app.use(express.static("public"));

const port = 3000;

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
