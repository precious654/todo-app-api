const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    description: { type: String, default: "a task",},
});

module.exports = mongoose.model("Task", taskSchema);