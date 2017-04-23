var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: "name is required"
  },
  status: {
    type: [{
      type: String,
      enum: ["pending", "doing", "done"]
    }],
    default: ["pending"]
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Tasks", TaskSchema);
