const Products = require('../entity/products')

const Service = function (req, res, next) {

	// buscar produto mais recente para fazer o update, assim evita algum tipo de erro no update
	const findById = Products.findById(req.params.id).exec()

	/**

		UPDATE:
		- @param _id = id que vem do request
		- @param body = req.body conteudo a ser alterado
		- @param multi = para não aterar todos os registros

	 */

	const update = Products.update({ _id: req.params.id }, { $set: req.body }, { multi: false })

	findById
	.then(function (product) {

		update
		.then(function (result) {

			if (!update) {

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

		.catch(function (err) {

			return
			res
			.status(500)
			.json({

				status: false,
				data: {}

			})

		})

	})

	.catch(function (err) {

		return
		res
		.status(500)
		.json({

			status: false,
			data: {}

		})

	})

}

module.exports = Service