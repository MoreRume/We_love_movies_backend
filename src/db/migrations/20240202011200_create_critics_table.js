/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('critics', function(table) {
    table.increments('critic_id').primary();
    table.string('preferred_name').notNullable();
    table.string('surname').notNullable();
    table.string('organization_name').notNullable();
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('critics');
};
