
exports.up = function(knex, Promise) {
    return  knex.schema.createTable('question_images', (table) => {
        table.integer('ques_id').primary();
        table.integer('test_id').notNullable();
        table.string('images').notNullable();
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('question_images')
};
