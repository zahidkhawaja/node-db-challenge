const db = require("../data/db_config");

module.exports = {
    getProjects
  };

function getProjects() {
    return db("projects");
}