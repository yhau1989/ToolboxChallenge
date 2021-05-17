
const { Router } = require('express')
const { reverse } = require('../libs/text')
const router = Router()

router.get('/', (req, res) => res.send('Hola Toolbox'))

router.get('/iecho', (req, res) => {
  const { text } = req.query
  const result = reverse(text)

  if (result.status === 0) {
    res.status(200).send(result.data)
  } else {
    res.status(400).json(result.data)
  }
})

module.exports = router
