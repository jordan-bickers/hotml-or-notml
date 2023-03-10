const express = require('express')

const db = require('../db/db')

const router = express.Router()

// router.get('/', (req, res) => {
//   db.getTags()
//     .then((tags) => {
//       // console.log(tags)
//       res.render('index', { tags: tags })
//     })
//     .catch((err) => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

router.post('/vote', (req, res) => {
  const id = Number(req.body.id)
  db.createVote(id)
    .then(() => {
      res.redirect('/')
    })

    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/', (req, res) => {
  //TODO: Replace this with tags data
  db.countVotes()
    .then((tags) => {
      console.log(tags)
      res.render('index', { tags: tags })
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profile/:id', (req, res) => {
  const id = Number(req.params.id)
  db.countVotes()
    .then((tags) => {
      console.log(tags)
      const profileData = tags.find((el) => {
        return el.id === id
      })
      console.log(profileData)

      res.render('profile', { tags: profileData })
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/vote', (req, res) => {
  res.redirect('/')
})

module.exports = router
