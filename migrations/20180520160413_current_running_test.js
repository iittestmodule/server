
exports.up = function(knex, Promise) {
    return knex.schema.createTable('current_running_test', (table) => {
        table.integer('test_id').primary();
        table.date('date').notNullable();
      })
};

exports.down = function(knex, Promise) {
    return  knex.schema.dropTable('current_running_test')
};
