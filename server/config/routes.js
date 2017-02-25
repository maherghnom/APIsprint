//you need to require some files here

var gameController = require ('../game/gameController.js')
var teamController = require ('../team/teamController.js')

module.exports = function (app, express) {

//=============================================================================
/*								team route									 */
//=============================================================================
	app.get ('/api/team/getAll'       , teamController.getAllTeams   );
	app.post('/api/team/insertTeams'  , teamController.insertTeams   );
	app.get ('/api/team/:name'        , teamController.getteambyname );
	
	
//=============================================================================
/*								game route									 */
//=============================================================================
	//app.post('/api/book/insterbooks', bookController.insertBooks);
	//here you have to add two more routes
	app.get ('/api/game/getAll'     , gameController.getAllGames    );
	app.post('/api/game/insertGame' , gameController.insertGame     );
	app.get ('/api/game/:title'     , gameController.getgamebytitle );


};

