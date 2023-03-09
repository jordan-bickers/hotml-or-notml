//const { join } = require('node:path')
const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/users')
const leaderboardRoutes = require('./routes/leaderboard.js')
const commentRoutes = require('./routes/comment')
const profileRoutes = require('./routes/profile')

const server = express()

// Middleware
const publicFolder = __dirname + '/public'
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: true }))

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')

// Routes
//server.use('/', userRoutes)
server.use('/', leaderboardRoutes)
// server.use('/comment', commentRoutes)
// server.use('/profile', profileRoutes)

module.exports = server
