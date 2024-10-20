const express = require("express");
const router = express.Router();

router.post('/', (req, res, next) => {
    const task = {
        name: req.body.name,
        description: req.body.description,
    };

    res.status(200).json(task);
})

module.exports = router;