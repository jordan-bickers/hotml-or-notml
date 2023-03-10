/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('descriptions').del()
  await knex('descriptions').insert([
    {
      id: 1,
      description:
        'The bold and confident one, always taking up space and commanding attention',
    },
    {
      id: 2,
      description:
        'The sweet and friendly one, easy to talk to and always ready for a conversation',
    },
    {
      id: 3,
      description:
        'The warm and calming one, with a sense of serenity and order admidst chaos',
    },
    {
      id: 4,
      description:
        "The visual one, always looking sharp and catching everyone's eye",
    },
    {
      id: 5,
      description:
        'The versatile one, able to fit into any situation and adapt to any role',
    },
  ])
}
