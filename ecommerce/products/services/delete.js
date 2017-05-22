const Products = require('../entity/products')

const Service = function (req, res, next) {

	const findById 	= Products.findById(req.params.id).exec()
	const remove 	= Products.remove({ _id: req.params.id })

	findById
		.then(function (product) {

			if (!product) {

				return res
				.status(404)
				.json({

					status: false,
					data: {

						_id: req.params.id

					}

				})

			}

			remove
			.exec()
			.then(function () {

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