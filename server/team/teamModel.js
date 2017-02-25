var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({

  name    : String,
  Ntitles : Number
	
});

var Team = mongoose.model('team', teamSchema);

module.exports = Team; 