const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/profile/:id', (req, res) => {
  //const id = Number(req.params.id)
  console.log('help')
  db.getTags()
    .then((tags) => {
      const viewData = {
        tags: tags,
      }
      console.log(viewData)

      res.render('profile', viewData[0])
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
