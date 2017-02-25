//implement model here//implement model here
var mongoose   = require('mongoose');

var gameSchema = mongoose.Schema({
	
  title : String,
  type  : String
	
})

var Game = mongoose.model('Game', gameSchema );

module.exports = Game ;			