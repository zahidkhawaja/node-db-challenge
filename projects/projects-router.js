const express = require("express");

const db = require("./projects-model");

const router = express.Router();


// GET all projects
router.get("/", (req, res) => {
    db.getProjects()
    .then(projects => res.status(200).json(projects))
    .catch(error => res.status(500).json({ "message": error }));
});

// GET project by ID
router.get("/:id", (req, res) => {
    db.getProjectById(req.params.id)
    .then(project => res.status(200).json(project))
    .catch(error => res.status(500).json({ "message": error }));
});

// POST projects
router.post("/", (req, res) => {
    db.addProject(req.body)
        .then(project => res.status(201).json(project))
        .catch(error => res.status(500).json({ "message": error }));
});

module.exports = router;