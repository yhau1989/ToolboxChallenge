const express = require('express')
const server = express()

// setting
server.set('port', process.env.PORT || 3001)

// routes

server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

server.use(require('./routes/index'))

// starting server
server.listen(server.get('port'), () => {
  console.log(`Server on port ${server.get('port')}`)
})

module.exports = server
