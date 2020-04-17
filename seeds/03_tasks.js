exports.seed = function(knex) {
  return knex("tasks").del()
    .then(function () {
      return knex("tasks").insert([
        {
          id: 1,
          task_description: 'Task desc1',
          task_notes: 'Task 1 notes',
          task_completed: 0,
          project_id: 1
        },
        {
          id: 2,
          task_description: 'Task desc2',
          task_notes: 'Task 2 notes',
          task_completed: 0,
          project_id: 1
        }
      ]);

    })
  }