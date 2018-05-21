
exports.up = function(knex, Promise) {
    return  knex.schema.createTable('question_topic_wise', (table) => {
        table.increments('id').primary();
        table.string('sub_name').notNullable().unique();
        table.string('topic').notNullable();
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
    return knex.schema.dropTable('question_topic_wise')
};
