const Product = require('../entity/products')

const Service = function (req, res, next) {

	const product = new Product(req.body)

	product
		.save()
		.then(function () {

			if (!product) {

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
						data: product

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