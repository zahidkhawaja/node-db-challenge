exports.up = function(knex) {
    return knex.schema
    // Create 'Projects' table
    .createTable("projects", tbl => {
        tbl.increments();
        tbl.string("project_name").notNullable();
        tbl.string("project_description");
        tbl.boolean("project_completed").defaultTo(0);
    })
    
    // Create 'Resources' table (many-to-many relationship with 'Projects'). Need a joining table for this.
    .createTable("resources", tbl => {
        tbl.increments();
        tbl.string("resource_name").notNullable();
        tbl.string("resource_description");
    })

    // Create 'Tasks' table (one-to-many relationship with 'Projects'). No joining table, just foreign key.
    .createTable("tasks", tbl => {
        tbl.increments();
        tbl.string("task_description").notNullable();
        tbl.string("task_notes");
        tbl.boolean("task_completed").defaultTo(0);
        // Foreign key
        tbl.integer("project_id")
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .notNullable();
    })

    // Joining table (projects - resources, many-to-many)
    .createTable("project-resources", tbl => {
        tbl.integer("project_id").notNullable()
        .references("id").inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

        tbl.integer("resource_id").notNullable()
        .references("id").inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")

        tbl.primary(["project_id", "resource_id"])
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("project-resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
