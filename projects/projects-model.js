const db = require("../data/db_config");

module.exports = {
    getProjects,
    getProjectById,
    addProject
  };

function getProjects() {
    return db("projects");
}

function getProjectById(id) {
    return db("projects").where("id", id);
}

function addProject(project) {
    return db("projects").insert(project);
};