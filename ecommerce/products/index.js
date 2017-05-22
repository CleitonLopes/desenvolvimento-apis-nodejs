const express = require('express')
const router = express.Router()

// 1
// ? parametro opcional
// router.get('/:id?', require('./services/find'))

// 2
// products/ab 		-> ok
// products/aaaaaab -> ok
// products/abbbbb 	-> erro
// router.get('/a+b', require('./services/find'))


// 3
// products/ab 					-> ok
// products/aaabbb, aab, aaabb, atestederota, -> ok
// products/abc, dab, dddab	-> erro
//router.get('/a*b', require('./services/find'))

// 4 regex
// qualquer rota que contenha a ou b vai funcionar
// a, b , ae, aw, eb, be -> OK
// router.get(/a|b/, require('./services/find'))

// 5 regex cm parametros
// id só aceitara numeros
// router.get('/:id(\\d+)', require('./services/find'))

// Crud
router.get('/:id?', require('./services/find'))
router.post('/', require('./services/create'))
router.put('/:id', require('./services/update'))
router.delete('/:id', require('./services/delete'))



module.exports = router
