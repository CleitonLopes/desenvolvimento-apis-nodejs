const mongoose = require('mongoose')

const Purchase = mongoose.Schema({

	name: {

		type: String,
		required: true

	},

	date: {

		type: Date,
		default: Date.now,
		required: true

	},

	shopping: {

		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Shopping'

	},

	total: {

		type: Number,
		required: true

	}

})

module.exports = mongoose.model('Purchase', Purchase)