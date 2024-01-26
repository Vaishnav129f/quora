const express = require("express");
const postRouter = require("./routes/post.route.js");
const methodOverride = require("method-override");
const path = require("path");

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(postRouter);

module.exports = app;
