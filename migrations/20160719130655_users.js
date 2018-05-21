
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments().primary();
    table.string('name').notNullable();
    table.string('username').notNullable().unique();
    table.string('email').notNullable().unique();
    table.string('mobileno').notNullable().unique();
    table.string('state').notNullable();
    table.string('city').notNullable();
    table.string('timezone').notNullable();
    table.string('password_digest').notNullable();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

// exports.up = function(knex, Promise) {
//   return Promise.all([
//     knex.schema.createTable('users', function(table) {
//       table.increments('id').primary();
//       table.string('name').notNullable();
//       table.string('standard').notNullable();
//       table.string('username').notNullable().unique();
//       table.string('email').notNullable().unique();
//       table.string('mobileno').notNullable().unique();
//       table.number('state').notNullable();
//       table.mumber('city').notNullable();
//       table.string('timezone').notNullable();
//       table.string('password_digest').notNullable();
//       table.timestamps();
//     }),
//     knex.schema.createTable('questions', (table) => {
//       table.increments('id').primary();
//       table.integer('test_id').notNullable();
//       table.string('sub_id').notNullable();
//       table.string('sub_name').notNullable();
//       table.string('question').notNullable();
//       table.string('qus_type').notNullable();
//       table.integer('marking').notNullable();
//       table.integer('negetive').notNullable();
//       table.integer('optionA');
//       table.integer('optionB');
//       table.integer('optionC');
//       table.integer('optionD');
//       table.string('ans').notNullable();
//       table.boolean('have_image');
//     }),
//     knex.schema.createTable('question_images', (table) => {
//       table.integer('ques_id').primary();
//       table.integer('test_id').notNullable();
//       table.string('images').notNullable();
//     }),
//     knex.schema.createTable('test_details', (table) => {
//       table.increments('id').primary();
//       table.string('test_name').notNullable().unique();
//       table.integer('no_of_questions').notNullable();
//       table.string('test_type').notNullable();//jeemains, advanced, 
//       table.string('test_duration').notNullable();//minutes
//       table.time('start_time').notNullable();
//       table.time('end_time').notNullable();
//       table.date('test_date').notNullable();
//     }),
//     knex.schema.createTable('scorecard', (table) => {
//       table.integer('user_id').primary();
//       table.string('test_name').notNullable().unique();
//       table.string('test_type').notNullable();
//       table.integer('full_marks').notNullable();
//       table.integer('user_score').notNullable();
//       table.date('test_date').notNullable();
//     }),
//     knex.schema.createTable('studant_answer', (table) => {
//       table.integer('user_id').primary();
//       table.integer('test_id').notNullable().unique();
//       table.integer('ques_id').notNullable();
//       table.string('ticked');
//       table.string('correct_answer').notNullable();
//       table.integer('marks_awarded').notNullable();
//       table.date('test_date').notNullable();
//     }),
//     knex.schema.createTable('test_topics_wise', (table) => {
//       table.increments('id').primary();
//       table.integer('test_id').notNullable();
//       table.string('test_name').notNullable();
//       table.string('test_duration').notNullable();
//       table.string('start_time').notNullable();
//       table.string('end_time').notNullable();
//     }),
//     knex.schema.createTable('question_topic_wise', (table) => {
//       table.increments('id').primary();
//       table.string('sub_name').notNullable().unique();
//       table.string('topic').notNullable();
//       table.string('question').notNullable();
//       table.string('qus_type').notNullable();
//       table.integer('marking').notNullable();
//       table.integer('negetive').notNullable();
//       table.integer('optionA');
//       table.integer('optionB');
//       table.integer('optionC');
//       table.integer('optionD');
//       table.string('ans').notNullable();
//       table.boolean('have_image');
//     }),
//     knex.schema.createTable('question_topic_images', (table) => {
//       table.integer('ques_id').primary();
//       table.string('images').notNullable();
//     }),
//     knex.schema.createTable('current_running_test', (table) => {
//       table.integer('test_id').primary();
//       table.date('date').notNullable();
//     }),
//     knex.schema.createTable('state', (table) => {
//       table.integer('id').primary();
//       table.string('name').notNullable();
//     }),
//     knex.schema.createTable('city', (table) => {
//       table.integer('id').primary();
//       table.string('name').notNullable();
//       able.integer('state_id').notNullable();
//     }),
//   ]);
// };

// exports.down = function(knex, Promise) {
//   return Promise.all([
//     knex.schema.dropTable('users'),
//     knex.schema.dropTable('test_details'),
//     knex.schema.dropTable('questions'),
//     knex.schema.dropTable('question_images'),
//     knex.schema.dropTable('scorecard'),
//     knex.schema.dropTable('studant_answer'),
//     knex.schema.dropTable('test_topics_wise'),
//     knex.schema.dropTable('question_topic_wise'),
//     knex.schema.dropTable('question_topic_images'),
//     knex.schema.dropTable('current_running_test'),
//     knex.schema.dropTable('state'), 
//     knex.schema.dropTable('city'),
    



//   ]);
// };
