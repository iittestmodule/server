
exports.up = function(knex, Promise) {
    return  knex.schema.createTable('questions', (table) => {
        table.increments('id').primary();
        table.integer('test_id').notNullable();
        table.string('sub_id').notNullable();
        table.string('sub_name').notNullable();
        table.string('question').notNullable();
        table.string('qus_type').notNullable();
        table.integer('marking').notNullable();
        table.integer('negetive').notNullable();
        table.integer('optionA');
        table.integer('optionB');
        table.integer('optionC');
        table.integer('optionD');
        table.string('ans').notNullable();
        table.boolean('have_image');
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('questions')
};
