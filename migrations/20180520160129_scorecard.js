
exports.up = function(knex, Promise) {
	return	knex.schema.createTable('scorecard', (table) => {
		table.integer('user_id').primary();
		table.string('test_name').notNullable().unique();
		table.string('test_type').notNullable();
		table.integer('full_marks').notNullable();
		table.integer('user_score').notNullable();
		table.date('test_date').notNullable();
	})	
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('scorecard')
};
