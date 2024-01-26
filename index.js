const express = require("express");
const { connectToDb } = require("./db");
const app = require("./app.js");
require("dotenv").config();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  connectToDb();
  console.log(`Example app listening on port ${port}`);
});
