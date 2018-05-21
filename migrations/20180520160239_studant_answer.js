
exports.up = function(knex, Promise) {
    return knex.schema.createTable('studant_answer', (table) => {
        table.integer('user_id').primary();
        table.integer('test_id').notNullable().unique();
        table.integer('ques_id').notNullable();
        table.string('ticked');
        table.string('correct_answer').notNullable();
        table.integer('marks_awarded').notNullable();
        table.date('test_date').notNullable();
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('student_answer')
};
