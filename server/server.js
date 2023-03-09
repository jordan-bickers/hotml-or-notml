const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/users')

const server = express()

// Middleware
const publicFolder = __dirname + '/public'
server.use(express.static(publicFolder))
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')
server.use(express.urlencoded({ extended: true }))

// Routes
server.use('/', userRoutes)

module.exports = server
