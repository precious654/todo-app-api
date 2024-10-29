const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Task = require("../models/task");
const TaskController = require("../controllers/task");

router.post("/", TaskController.create_new_task);

router.get("/", TaskController.task_get_all);

router.get("/:taskId", TaskController.task_get_by_id);

router.patch("/:taskId", TaskController.update_task);

router.delete("/:taskId", TaskController.delete_task);

module.exports = router;
