var express = require('express');
var mongoClient = require('mongodb').MongoClient;
var consolid = require('consolidate');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());
app.engine('html', consolid.pug);
app.set('view engine', 'html');
app.set('views',  __dirname +  '/views');

var urlDB = 'mongodb://localhost:27017/bibliotheque';

app.get('/', function(req, res) {
	res.render("index");
})
.get('/books', function(req, res) {
	app.db.collection('livre').find({}).toArray(function(err, livre) {
		res.render("books", {
			'livres' : livre
		});
	});
});

mongoClient.connect(urlDB, function (err, db) {
	app.db = db;
	app.listen(8080);
	console.log("Express server started on 8080");
});