/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('movies_theaters', function(table) {
      table.integer('movie_id').references('movies.movie_id');
      table.integer('theater_id').references('theaters.theater_id');
      table.boolean('is_showing').defaultTo(false); // Default value for boolean column
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('movies_theaters');
};
