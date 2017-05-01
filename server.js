var express = require('express');
var app = express();
// var $ = require('jquery');

app.set('view engine', 'ejs');
app.set('port',(process.env.PORT || 5000));


app.use(express.static(__dirname + '/views/css'));

app.get('/', function(req, res) {

	res.render('pages/index',{

		});
	});

app.listen( app.get( 'port' ), function(){
	console.log( 'Node server is running on port' + app.get( 'port'));
	});

