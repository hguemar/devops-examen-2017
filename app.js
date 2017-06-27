var express = require('express');
var session = require('express-session');
var cons = require('consolidate');
var bodyParser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;

app.engine('html', cons.pug);
app.set('view engine', 'html');
app.set('views',  __dirname +  '/views');
app.use(bodyParser());

app.get('/', function(req, res) {
    res.render("index");
});

app.get('/books', function(req, res) {
  app.db.collection('livres').find({}).toArray(function(err, books) {
    res.render("books",  {'books' : books});
  });
});

MongoClient.connect('mongodb://localhost:27017/bibliotheque', function(err, db) {
  app.db = db;
  app.listen(8000);
  console.log("Express server started on 8000");
});
