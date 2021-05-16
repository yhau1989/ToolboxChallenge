const express = require('express')
const server = express()

// setting
server.set('port', process.env.PORT || 3000)

// routes
server.use(require('./routes/index'))

// starting server
server.listen(server.get('port'), () => {
  console.log(`Server on port ${server.get('port')}`)
})

module.exports = server
