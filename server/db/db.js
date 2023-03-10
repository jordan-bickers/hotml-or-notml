const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  // getUser: getUser,
  getTags,
  createVote,
  connection,
  countVotes,
}

//creates one object
function getTags(db = connection) {
  return db('tags')
    .select()
    .join('descriptions', 'description_id', 'descriptions.id')
    .join('votes', 'vote_id', 'votes.id')
}

function createVote(tag_id, db = connection) {
  return db('votes').insert({ tag_id })
}

function countVotes(db = connection) {
  return db('tags')
    .leftOuterJoin('votes', 'tags.id', 'votes.tag_id')
    .groupBy('tags.id')
    .select('tags.*')
    .count('votes.id as vote_count')
}
