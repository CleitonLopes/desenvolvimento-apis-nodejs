const express = require('express')
const router = express.Router()

router.get('/', require('./service/find'))
router.post('/', require('./service/create'))
router.delete('/:id/:productId', require('./service/delete'))

module.exports = router