const db = require("../data/db_config");

module.exports = {
    getProjects,
    getProjectById
  };

function getProjects() {
    return db("projects");
}

function getProjectById(id) {
    return db("projects").where("id", id);
}