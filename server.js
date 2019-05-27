var express = require("express");
var app = express();

// ----- Pug
app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("css")); //is it really necessary?

// ----- GET: main page (pug)
app.get("/", function(req, res) {
  res.render("index.pug");
});

// ----- GET: login (pug)
app.get("/login", function(req, res) {
  res.render("login.pug", {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  });
});

// ----- GET: logged (pug)
app.get("/auth/google", function(req, res) {
  res.render("logged.pug");
});

var server = app.listen(3000, "localhost", function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening on http://" + host + ":" + port);
});

// ------ handling 404
app.use(function(req, res, next) {
  res
    .status(404)
    .send("Not what you've been looking for but still I love U 3000");
});
