exports.up = (knex) => {
  return knex.schema.createTable('tags', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.text('description')
    table.text('description_id')
    table.text('vote_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('tags')
}
