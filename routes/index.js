const express = require('express')
const router = express.Router()
const pkg = require('../package.json')

router.get('/', (req, res) => {
  res.send({ name: pkg.name, version: pkg.version })
})

router.get('/callback', (req, res) => {
  res.send(req.query)
})

module.exports = router