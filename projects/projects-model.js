const db = require("../data/db_config");

module.exports = {
    getProjects,
    getProjectById,
    addProject,
    getResources,
    addResource,
    getTasks,
    addTask
  };

// Projects
function getProjects() {
    return db("projects");
}

function getProjectById(id) {
    return db("projects").where("id", id);
}

function addProject(project) {
    return db("projects").insert(project);
};

// Resources
function getResources() {
    return db("resources");
};

function addResource(resource) {
    return db("resources").insert(resource);
}

// Tasks
function getTasks(id) {
    return db("projects")
        .select("*")
        .join("tasks", "tasks.project_id", "projects.id")
        .where({ "tasks.project_id": id });
};

function addTask(task) {
    return db("tasks").insert(task);
};