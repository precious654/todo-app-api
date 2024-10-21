const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  const task = {
    title: req.body.title,
    description: req.body.description,
  };
  return res.status(201).json(task);
});

module.exports = router;
