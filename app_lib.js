var express = require('express');
var cons = require('consolidate');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var app = express();

app.engine('html', cons.pug);
app.set('view engine', 'html');
app.set('views',  __dirname +  '/views');
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render("index");
});

app.get('/books', function(req, res) {
	app.db.collection('books').find({}).toArray(function(err, books) {
		res.render("books",	{'books' : books});
	});
});

app.get('/books/new', function(req, res) {
	res.render("new");
});

app.post('/books/processNew', function(req, res) {
	var newBook = { date: req.body.date, title: req.body.title, author: req.body.author,ISBN: req.body.isbn, state: req.body.state, theme: req.body.theme};
	app.db.collection('books').save(newBook);
	res.redirect('/books');
});

MongoClient.connect('mongodb://localhost:27017/library', function(err, db) {
	app.db = db;
	app.listen(8080);
});