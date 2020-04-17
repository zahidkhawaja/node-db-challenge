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

// GET resources
router.get("/:id/resources", (req, res) => {
    db.getResources()
        .then(resources => res.status(200).json(resources))
        .catch(error => res.status(500).json({ "message": error }));
});

// POST resources
router.post("/:id/resources", (req, res) => {
    db.addResource(req.body)
        .then(resource => res.status(201).json(resource))
        .catch(error => res.status(500).json({ "message": error }))
});

// GET tasks
router.get("/:id/tasks", (req, res) => {
    db.getTasks(req.params.id)
    .then(task => res.status(201).json(task))
    .catch(error => res.status(500).json({ "message": error }))
});

// POST tasks
router.post("/:id/tasks", (req, res) => {
    db.addTask(req.body)
    .then(task => res.status(200).json(task))
    .catch(error => res.status(500).json({ "message": error }))
});

module.exports = router;