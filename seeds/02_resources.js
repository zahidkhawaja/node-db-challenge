exports.seed = function(knex) {
  return knex("resources").del()
    .then(function () {
      return knex("resources").insert([
        {
          id: 1,
          resource_name: "DuckDuckGo",
          resource_description: "Description here"
        },
        {
          id: 2,
          resource_name: "StackOverFlow",
          resource_description: "Description here"
        }
      ]);

    })
  }