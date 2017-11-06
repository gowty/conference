var express = require("express");
var app = express();

app.set("port", process.env.PORT || 7000);

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("index.html");
});

app.get("/papersubmission", function(req, res) {
  res.render("papersubmission");
});

app.get("/registration", function(req, res) {
  res.render("registration");
});

app.get("/venue", function(req, res) {
  res.render("venue");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.get("/blog", function(req, res) {
  res.render("blog");
});

app.listen(app.get("port"), function() {
  console.log("Node app is running on port", app.get("port"));
});
