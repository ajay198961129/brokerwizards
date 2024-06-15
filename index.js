const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.set(express.static(__dirname, ""));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/stocks", (req, res) => {
  res.render("stock.ejs");
});

app.get("/for-trader", (req, res) => {
  res.render("trader.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/sign-up", (req, res) => {
  res.render("signup.ejs");
});

app.get("/deposit", (req, res) => {
  res.render("deposit.ejs");
});

app.listen(3000, () => {
  console.log("Server Listening on port 3000");
});
