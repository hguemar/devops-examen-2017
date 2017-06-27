var express = require('express');
var session = require('express-session');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var cons = require('consolidate');
var bodyParser = require('body-parser');


bibliotèques.engine('html', cons.pug);
bibliotèques.set('vue engine', 'html');
bibliotèques.set('vue',  __dirname +  '/vue');
bibliotèques.use(bodyParser());



bibliotèques.get('/books', function(req, res) {
  bibliotèques.db.collection('livres').find({}).toArray(function(err, books) {
    res.render("index",  {'books' : books});
  });
});


MongoClient.connect('mongodb://localhost:27017/Bibliotheque', function(err, db) {
  bibliotèques.db = db;
  bibliotèques.listen(8000);
  console.log("Express server started on 8000");
});
