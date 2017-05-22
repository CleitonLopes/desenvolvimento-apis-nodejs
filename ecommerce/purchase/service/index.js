const Purchase = require('../entity/purchase')
const Shopping = require('../../shopping/entity/shopping')

const Service = function (req, res, next) {

	let purchase = new Purchase(req.body)

	purchase.shopping = req.params.shoppingId

	Shopping
		.findById(req.params.shoppingId)
		.populate('products')
		.exec()
		.then(function (shopping) {

			if(!shopping) {

				return res
				.status(404)
				.json({

					status: false,
					data: {}

				})
			}

			let total = 0;

			shopping.products.forEach(function (value, key) {

				if((shopping.products.length - 1) !== key) {

					total += value.price

				}

				purchase.total = total

				purchase
					.save()
					.then(function (result) {

						return res
							.status(200)
							.json({

								status: true,
								data: result

							})

					})

					.catch(function (err) {

						return res
						.status(500)
						.json({

							status: false,
							data: {}

						})
					})
			})



		})

		.catch(function (err) {

			return res
					.status(500)
					.json({

						status: false,
						data: {}

					})
		})






}

module.exports = Service