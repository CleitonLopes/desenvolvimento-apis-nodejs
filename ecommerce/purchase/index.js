const express = require('express')
const router = express.Router()

router.post('/:shoppingId', require('./service'))

module.exports = router