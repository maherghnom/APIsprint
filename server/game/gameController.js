//require the model here
var Game = require('./gameModel');
module.exports ={
	getAllGames : function (req, res) {
		console.log('in game Controller')
		Game.find({}, function(err, data){
			if(err){
				console.log(err);
			}
			else{
				console.log(">>>> " + data );
				res.json(data)
			}

		});
		
	},

	insertGame : function (req,res){
		console.log(req)
		var g = new Game({ title : req.body.title , type :req.body.type});
		console.log('!!!!!!!!',g)
		g.save(function (err,data) {

			if (err) {
				console.log(err);
			}
			else {
				console.log("game saved");
				res.json(data)
			}
		});

	},


	getgamebytitle : function (req,res){
		console.log('in get game by title',req.params.title)

		Game.findOne({title:req.params.title})
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

