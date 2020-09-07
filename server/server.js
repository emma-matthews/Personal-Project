require('dotenv').config()
const path = require('path')
const express = require('express')
const analyse = require('./routes/analyse')
const server = express()


//provide text for analysis (req.body) from front end
const text = 'Team, I know that times are tough! Product '
  + 'sales have been disappointing for the past three '
  + 'quarters. We have a competitive product, but we '
  + 'need to do a better job of selling it!';


server.use(express.json())

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/analyse', analyse)

module.exports = server

