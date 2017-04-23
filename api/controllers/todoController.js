var mongoose = require("mongoose");
var Task = mongoose.model("Tasks");

exports.taskGetAll = (req, res) => {
  Task.find({}, (err, todo) => {
    if (err) res.send(err);
    res.json(todo);
  });
};

exports.taskPost = (req, res) => {
  var newTodo = new Task(req.body);
  newTodo.save((err, todo) => {
    if (err) res.send(err);
    res.json(todo);
  });
};

exports.taskGet = (req, res) => {
  Task.findById(req.params.taskId, (err, todo) => {
    if (err) res.send(err);
    res.json(todo);
  });
};

exports.taskPut = (req, res) => {
  Task.findOneAndUpdate(req.params.id, req.body, {new: true}, (err, todo) => {
    if (err) res.send(err);
    res.json(todo);
  });
};

exports.taskDelete = (req, res) => {
  Task.remove({_id: req.params.taskId}, (err, todo) => {
    if (err) res.send(err);
    res.json({message: "Task is deleted successfully", todo});
  });
};
