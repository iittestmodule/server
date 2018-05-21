
exports.up = function(knex, Promise) {
    return  knex.schema.createTable('test_details', (table) => {
        table.increments('id').primary();
        table.string('test_name').notNullable().unique();
        table.integer('no_of_questions').notNullable();
        table.string('test_type').notNullable();//jeemains, advanced, 
        table.string('test_duration').notNullable();//minutes
        table.time('start_time').notNullable();
        table.time('end_time').notNullable();
        table.date('test_date').notNullable();
      })
};

exports.down = function(knex, Promise) {
    return  knex.schema.dropTable('test_details')
};
