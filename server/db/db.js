const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  // getUser: getUser,
  getTags,
}

function getTags(db = connection) {
  return db('tags').select()
}

// function getUser(id, db = connection) {
//   return db('users').where('id', id).first()
// }
