//require files here
var Team = require('./teamModel');
module.exports ={
	getAllTeams : function (req, res) {
		console.log('in team Controller')
		Team.find({}, function(err, data){
			if(err){
				console.log(err);
			}
			else{
				console.log(">>>> " + data );
				res.json(data)
			}

		});
	},
	insertTeams : function (req,res){
		console.log(req.body)

		var arr = req.body
		Team.insertMany(arr, function(error, data) {
			if (error) {
				console.log(error);
			}
			else {
				console.log("team saved");
				res.json(data)
			}
		});

	},
	getteambyname : function (req,res){
		console.log('in get team by name',req.params.name)

		Team.findOne({name:req.params.name})
		.exec(function(err,data){
			console.log('haaa',err)
			if (err){
				console.log(err)
			}else {
				console.log(data)
				res.json(data)

			}
		});

	}

	
};


