var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = process.env.PORT || 8000;
var Task = require("./api/models/todoModel");

mongoose.connect("mongodb://localhost/todo");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Middleware to not found routes
// app.use(function(req, res) {
//   res.status(404).send();
// });

var routes = require("./api/routes/todoRoutes");

routes(app);

app.listen(port, () => {
  console.log(`localhost is running in http://localhost:${port}`);
});


