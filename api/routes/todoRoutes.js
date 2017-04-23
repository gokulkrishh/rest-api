module.exports = (app) => {
  const todoController = require("../controllers/todoController");

  app.get("/", (req, res) => {
    res.send("Hello");
  });

  // TODO API
  app.route("/tasks")
  .get(todoController.taskGetAll)
  .post(todoController.taskPost)


  app.route("/tasks/:id")
    .get(todoController.taskGet)
    .put(todoController.taskPut)
    .delete(todoController.taskDelete)
};
