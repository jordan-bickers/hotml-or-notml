const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/profile/:id', (req, res) => {
  const id = Number(req.params.id)

  //TODO: Replace this with tags data

  const tags = [
    {
      id: id,
      name: 'h1',
      description: 'hey there sexy h1',
      vote_id: 1,
      count: 200,
    },
  ]

  db.function()
    .then((item) => {
      const viewData = {
        tags: tags,
        item: item,
      }

      res.render('profile', viewData)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
