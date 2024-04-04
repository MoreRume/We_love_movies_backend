/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('reviews', function(table) {
    table.increments('review_id').primary();
    table.text('content').notNullable();
    table.integer('score').notNullable();
    table.integer('critic_id').unsigned().references('critics.critic_id'); // Foreign key reference
    table.integer('movie_id').unsigned().references('movies.movie_id'); // Foreign key reference
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('reviews');
};
