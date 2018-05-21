
exports.up = function(knex, Promise) {
    return knex.schema.createTable('question_topic_images', (table) => {
        table.integer('ques_id').primary();
        table.string('images').notNullable();
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('question_topic_images')
};
