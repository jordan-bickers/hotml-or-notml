/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('votes').del()
  await knex('votes').insert([
    { id: 1, count: 10 },
    { id: 2, count: 20 },
    { id: 3, count: 30 },
    { id: 4, count: 40 },
    { id: 5, count: 50 },
  ])
}
