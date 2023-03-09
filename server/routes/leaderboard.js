const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getTags()
    .then((tags) => {
      console.log(tags)
      res.render('index', { tags: tags })
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/', (req, res) => {
  //TODO: Replace this with tags data
  db.getTags()
    .then((tags) => {
      console.log(tags)
      res.render('index', { tags: tags })
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/vote', (req, res) => {
  res.redirect('/')
})

module.exports = router
