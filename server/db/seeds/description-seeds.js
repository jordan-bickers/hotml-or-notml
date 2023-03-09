/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('descriptions').del()
  await knex('descriptions').insert([
    { id: 1, description: 'rowValue1' },
    { id: 2, description: 'rowValue1' },
    { id: 3, description: 'rowValue1' },
    { id: 4, description: 'rowValue1' },
    { id: 5, description: 'rowValue1' },
  ])
}
