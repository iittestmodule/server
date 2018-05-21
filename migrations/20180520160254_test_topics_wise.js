
exports.up = function(knex, Promise) {
    return knex.schema.createTable('test_topics_wise', (table) => {
        table.increments('id').primary();
        table.integer('test_id').notNullable();
        table.string('test_name').notNullable();
        table.string('test_duration').notNullable();
        table.string('start_time').notNullable();
        table.string('end_time').notNullable();
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('test_topic_wise')
};
