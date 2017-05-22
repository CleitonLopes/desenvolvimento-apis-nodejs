const express 		= require('express')
const http 			= require('http')
const bodyParser 	= require('body-parser')
const morgan		= require('morgan')
const mongoose		= require('mongoose')
const cors 			= require('cors')

const app 			= express();
const server 		= http.createServer(app)

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


/******************************** CORS *********************************/

// Definindo Cors
// Aqui pode criar um middleware ou usar algum pacote ja pronto

// dominios para usar no core de exemplo
// let domainList = ['http://teste.com.br', 'http://teste2.com.br']
// app.use(cors({

// 	// para limitar para apenas um dominio
// 	// origin: 'dominioescolhido.com'

// 	// para varios dominios
// 	origin: function (origin, cb) {

// 		let index = domainList.index(origin)

// 		if (index !== -1) {

// 			cb(null, index)

// 		}

// 	},

// 	methods: ['GET', 'POST', 'PUT', 'DELETE']

// }))

// Definindo o proprio middleware
// app.use(function (req, res, next) {

// 	res.header('Access-Control-Allow-Origin', 'http://teste.com.br')
// 	res.header('Access-Control-Allow-Headers', 'Authorization, X-Request, CustomHeader')
// 	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

// })

/****************************************************************************/



// database
const mongoDb = mongoose.connect('mongodb://localhost/ecommerce').connection;

mongoDb.on('connected', function () {

	console.log('MongoDB is connected')

})

mongoDb.on('error', function () {

	console.log('MongoDB error')

})

// routes
// passo o parametro app que é o express
require('./routes/routes')(app)

server.listen(3000, function () {

	console.log('Server is initialized...')

})