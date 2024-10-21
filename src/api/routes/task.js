const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Task = require("../models/task");

router.post("/", (req, res, next) => {
  const newTask = new Task({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
  });
  newTask
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Task created successfully",
        task: {
          id: result._id,
          title: result.title,
          description: result.description,
        },
        request: {
          type: "GET",
          url: "http://localhost:3000/task/" + result._id,
        },
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err });
    });
});

router.get("/", (req, res, next) => {
  Task.find()
    .select("title description _id")
    .exec()
    .then((tasks) => {
      console.log(tasks);
      const response = {
        count: tasks.length,
        tasks: tasks.map((task) => {
          return {
            id: task._id,
            title: task.title,
            description: task.description,
            request: {
              type: "GET",
              url: "http://localhost:3000/task/" + task._id,
              description: "Get this task",
            },
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err });
    });
});

router.delete("/:taskId", (req, res, next) => {
  const id = req.params.taskId;
  Task.deleteOne({ _id: id })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Task deleted successfully",
        request: {
          type: "GET",
          url: "http://localhost:3000/task",
          description: "Get all tasks",
        },
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
