const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Vercel! Welcome to your simple app.");
});

app.get("/api", (req, res) => {
  res.json({ message: "This is your API endpoint!" });
});

module.exports = app;
