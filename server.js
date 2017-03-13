var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//import from our own file (direct path) dont need .js
var models = require('./models');
// var Category = require('./models/category');

//Confirgure app for bodyParser()
//let us grab data from the body of POST
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Set up port for server to listen on
var port = process.env.PORT || 3000;
//Connect to DB
//mongoose.connect('mongodb://localhost:27017/myproj');

//API Routes
var router = express.Router();

//Routes will all be prefixed with /api
app.use('/api', router);

//MIDDLEWARE - 
//Middleware very useful for doing validation. We can log things 
//from here or stop the request from continuing in the event that the request is not safe
//middleware t ouse for all requests
//Just a test to make sure router is working
router.use(function(req,res,next) {

	console.log("Some processing currently running");
	//always call next cuz after some execution of middleware, we want to continue the request
	next();
})


//Test Route  
router.get('/', function(req, res){
	res.json({message:"Welcome to our API!"});
});

//Use Router syntax to replace the old app.get app.post to make it easier to read
router.route('/category')
	//get all categories
	.get(function(req, res){
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end("123");
	})
	
// router.route('/source')
// 	//get all source
	.get(function(req, res){
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end("123");
	})

	.post(function(req, res){
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end("456");
	})

// router.route('/source')
// 	//get all source
// 	.get(function(req, res){
// 		res.writeHead(200, {'Content-Type': 'application/json'});
// 		res.end("123");
// 	})

// router.route('/article')
// 	//get all source
// 	.get(function(req, res){
// 		res.writeHead(200, {'Content-Type': 'application/json'});
// 		res.end("123");
// 	})

//Fire up server

models.sequelize.sync().then(function(){
    app.listen(port, function() {
        console.log('Amazing music app server listening on port 3000!');
    });
});

