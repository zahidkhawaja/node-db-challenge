exports.seed = function(knex) {
  return knex("projects").insert([
    {
      id: 1,
      project_name: "Build chatroom application",
      project_description: "Need to use websockets",
      project_completed: 0
    },
    {
      id: 2,
      project_name: "Cleanup desktop",
      project_description: "Get rid of clutter",
      project_completed: 0
    }
  ]);
};