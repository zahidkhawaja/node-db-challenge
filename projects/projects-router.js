const express = require("express");

const db = require("./projects-model");

const router = express.Router();


// GET all projects
router.get("/", (req, res) => {
    db.getProjects()
    .then(projects => res.status(200).json(projects))
    .catch(error => res.status(500).json({ "message": error }));
});

module.exports = router;