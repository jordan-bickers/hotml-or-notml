/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('votes', (table) => {
    table.increments('id').primary()
    table.integer('tag_id').references('tags.id').onDelete('CASCADE')
    table.integer('count')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('votes')
}
