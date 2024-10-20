const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);