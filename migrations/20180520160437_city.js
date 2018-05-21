exports.up = function(knex, Promise) {
    return knex.schema.createTable('cites', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('state_id').notNullable();
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cites')
};