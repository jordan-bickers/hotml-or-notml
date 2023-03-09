exports.up = (knex) => {
  return knex.schema.createTable('tags', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('description_id')
    table.integer('vote_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('tags')
}
