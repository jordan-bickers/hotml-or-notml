const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  // getUser: getUser,
  getTags,
}

//creates one object
function getTags(db = connection) {
  return db('tags')
    .select()
    .join('descriptions', 'description_id', 'descriptions.id')
    .join('votes', 'vote_id', 'votes.id')
}

// function getUser(id, db = connection) {
//   return db('users').where('id', id).first()
// }
