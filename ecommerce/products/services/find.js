const Products = require('../entity/products')

//const xml2js = require('xml2js').parseString

// const service = function (req, res) {

	// if(req.params.id) {

	// 	res.send('OK ID')
	// }

	// res.send('OK')

	//
	// res.send('A -> B')

	/*********************************************/

	// resposta em json
	// res
	// .status(200)
	// .json({

	// 	name: 'Api com Nodejs'

	// })

	/**********************************************/

	// resposta em xml

	// let xml = '<NFe xmlns="http://www.portalfiscal.inf.br/nfe">'
	// xml2js(xml, function (err, result) {

	// 	res
	// 	.status(200)
	// 	.send(result)


	// })

	// enviando apenas o status

	// res.sendStatus(200)

// }

// Aula crud
const service = function (req, res) {

	let find = {}

	if (req.params.id) {

		find = Products.findById(req.params.id).exec()

	}

	if(!req.params.id) {

		find = Products.find({}).exec()

	}

	find
		.then(function (result) {

			if(!result) {

				return res
						.status(404)
						.json({

							status: false,
							data: {}

						})

			}

			return res
					.status(200)
					.json({

						status: true,
						data: result

					})

		})

		.catch(function (error){

			return res
					.status(500)
					.json({

						status: false,
						data: {}

					})

		})

}

module.exports = service