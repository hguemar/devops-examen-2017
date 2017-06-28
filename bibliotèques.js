var express = require('express');
var session = require('express-session');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var cons = require('consolidate');
var bodyParser = require('body-parser');


app.engine('html', cons.pug);
app.set('vue engine', 'html');
app.set('vue',  __dirname +  '/vue');
app.use(bodyParser());


// Fonction d'affichage des livres de la bibliothèque
app.get('/books', function(req, res) {
  app.Bibliotheque.collection('livres').find({}).toArray(function(err, books) {
    res.render("index",  {'books' : books});
  });
});

// Fonction d'insertion dans la bibliothèque
app.post('/books/new', function(req, res, next) {
    var theme = req.body.theme.split(",");
    var newBook = {ISBN: req.body.ISBN, titre: req.body.titre, auteur: req.body.auteur, date d'achat: new Date(), etat:req.body.etat, theme:theme}
      app.Bibliotheque.collection('book').save(newBook)
    res.redirect('/books')
});


MongoClient.connect('mongodb://localhost:27017/Bibliotheque', function(err, db) {
  app.Bibliotheque = Blibliotheque;
  app.listen(8000);
  console.log("Express server started on 8000");
});
