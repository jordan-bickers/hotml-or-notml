const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/leaderboard', (req, res) => {
  //TODO: Replace this with tags data

  const tags = [
    {
      id: 1,
      name: 'h1',
      description: 'hey there sexy h1',
      vote_id: 1,
      count: 200,
    },
    {
      id: 2,
      name: 'p',
      description: 'hey there sexy p',
      vote_id: 2,
      count: 210,
    },
    {
      id: 3,
      name: 'body',
      description: 'hey there sexy body',
      vote_id: 3,
      count: 220,
    },
    {
      id: 4,
      name: 'form',
      description: 'hey there sexy form',
      vote_id: 4,
      count: 230,
    },
    {
      id: 5,
      name: 'figcaption',
      description: 'hey there sexy figcaption',
      vote_id: 5,
      count: 240,
    },
  ]

  db.function()
    .then((item) => {
      const viewData = {
        tags: tags,
        item: item,
      }

      res.render('leaderboard', viewData)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/vote', (req, res) => {
  res.redirect('/')
})

module.exports = router
