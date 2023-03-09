exports.up = (knex) => {
  return knex.schema.createTable('tags', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.text('description')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('tags')
}
