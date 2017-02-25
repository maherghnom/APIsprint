//require express and mongoose here
var express  = require('express');
var mongoose = require('mongoose');
//require your middleware and routes here
var routes   = require('./config/routes');
var mw       = require('./config/middleware');


//=============================================================================
/*									Database								 */
//=============================================================================
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/apisprint');
var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  console.log('conected')
	});
	//here you will have to connect to your mongo database, 
	//set the port number and console log something so that 
	//you know that the mongodb is connected


//=============================================================================
/*									Server   								 */
//=============================================================================
var app  = express();
mw(app,express);
routes(app,express);
//set express to listen to for requests or certain port

var port = 8080;
app.listen(port,function(){
	console.log('wornking on port : ' + port)
 });




// module.exports = db;//some thing;





