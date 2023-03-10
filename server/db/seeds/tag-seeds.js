/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tags').del()
  await knex('tags').insert([
    {
      id: 1,
      name: '<h1>',
      description:
        'The bold and confident one, always taking up space and commanding attention',
      description_id: 1,
      vote_id: 1683,
    },
    {
      id: 2,
      name: '<p>',
      description:
        'A classic. A bit overly chatty but always sweet and friendly one, easy to talk to and always ready for a conversation',
      description_id: 2,
      vote_id: 2957,
    },
    {
      id: 3,
      name: '<body>',
      description:
        'Look at the curvature of that body. The warm and calming one, with a sense of serenity and order admidst chaos',
      description_id: 3,
      vote_id: 3927,
    },
    {
      id: 4,
      name: '<img>',
      description:
        "Eye catching, always turning heads and getting double takes. The visual one, always looking sharp and catching everyone's eye",
      description_id: 4,
      vote_id: 4990,
    },
    {
      id: 5,
      name: '<span>',
      description:
        'The versatile one, able to fit into any situation and adapt to any role',
      description_id: 5,
      vote_id: 4761,
    },
    {
      id: 6,
      name: '<a>',
      description:
        'The social one. Always making connections and leading people to new places',
      description_id: 6,
      vote_id: 4386,
    },
    {
      id: 7,
      name: '<ul>',
      description:
        'The organised one. Keeping things in order, and making sure everyone is on the same page.',
      description_id: 7,
      vote_id: 4761,
    },
    {
      id: 8,
      name: '<div>',
      description:
        'Winner 7 years in a row, but quickly falling out of fashion. The mysterious one. Hard to read at first but always revealling new sides of themselves.',
      description_id: 8,
      vote_id: 4243,
    },
    {
      id: 9,
      name: '<input>',
      description:
        'The active one. Always ready to take on new challenges and adapt to different situations.',
      description_id: 9,
      vote_id: 4098,
    },
    {
      id: 10,
      name: '<form>',
      description:
        'Wow! Look at that form. The collaborative one. Working with others to achieve common goals and make things happen.',
      description_id: 10,
      vote_id: 3987,
    },
  ])
}

// stuff from Shrena
//
// exports.seed = function (knex) {
//   return knex('users').insert([
//     { id: 99901, name: 'Ambitious Aardvark', email: 'aardvark@example.org' },
//     { id: 99902, name: 'Bamboozled Baboon', email: 'baboon@example.org' },
//     { id: 99903, name: 'Curious Capybara', email: 'capybara@example.org' },
//     { id: 99904, name: 'Dilapidated Duck', email: 'duck@example.org' },
//     { id: 99905, name: 'Exuberant Elephant', email: 'elephant@example.org' },
//     {
//       id: 99906,
//       name: 'Fascinated Flying Fox',
//       email: 'flying.fox@example.org',
//     },
//     {
//       id: 99907,
//       name: 'Generous Gila Monster',
//       email: 'gila.monster@example.org',
//     },
//     { id: 99908, name: 'Hilarious Heron', email: 'heron@example.org' },
//     { id: 99909, name: 'Intransigent Impala', email: 'impala@example.org' },
//     { id: 99910, name: 'Jocular Jerboa', email: 'jerboa@example.org' },
//     { id: 99911, name: 'Kafkaesque Kinkajou', email: 'kinkajou@example.org' },
//     { id: 99912, name: 'Loquacious Lemur', email: 'lemur@example.org' },
//     { id: 99913, name: 'Misanthropic Mongoose', email: 'mongoose@example.org' },
//     { id: 99914, name: 'Nonchalant Nyala', email: 'nyala@example.org' },
//     { id: 99915, name: 'Ornery Ocelot', email: 'ocelot@example.org' },
//     { id: 99916, name: 'Peaceful Pangolin', email: 'panda@example.org' },
//     { id: 99917, name: 'Querulous Quokka', email: 'quokka@example.org' },
//     { id: 99918, name: 'Resolute Rail', email: 'rail@example.org' },
//     { id: 99919, name: 'Senescent Sloth', email: 'sloth@example.org' },
//     { id: 99920, name: 'Tumultuous Terrapin', email: 'terrapin@example.org' },
//     { id: 99921, name: 'Unassailable Urial', email: 'urial@example.org' },
//     { id: 99922, name: 'Voracious Viscacha', email: 'viscacha@example.org' },
//     { id: 99923, name: 'Wondering Wombat', email: 'wombat@example.org' },
//     { id: 99924, name: 'Xenial Xerus', email: 'xerus@example.org' },
//     { id: 99925, name: 'Yielding Yak', email: 'yak@example.org' },
//     { id: 99926, name: 'Zaftig Zebu', email: 'zebu@example.org' },
//   ])
// }
