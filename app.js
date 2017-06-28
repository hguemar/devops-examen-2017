var express = require('express');
var session = require('express-session');
var cons = require('consolidate');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
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
  var result = '';
  console.log(session);
  if (typeof session.resultNew != undefined ){
    result = session.resultNew;
    session.resultNew = undefined;
  }
  if (typeof session.resultDelete != undefined ) {
    result = session.resultDelete;
    session.resultDelete = undefined;
  }

  app.db.collection('livres').find({}).toArray(function(err, books) {
    res.render("books",  {'books' : books, 'result' : result});
  });
});

app.post('/books/new', function(req, res) {
  console.log(req.body);
  var isbn = req.body.isbn.trim() === undefined ? '' : req.body.isbn.trim() ;
  var titre = req.body.titre.trim();
  var auteur = req.body.auteur.trim();
  var dateachat = req.body.dateachat.trim();
  var etat = req.body.etat;
  var thematiques = req.body.thematiques.split(",");

  if(typeof titre === undefined || titre === '' || typeof auteur === undefined || auteur === ''
    || typeof dateachat === undefined || dateachat === '' || typeof thematiques === undefined || thematiques === '' || typeof etat === undefined || etat === ''){
    session.resultNew = 'Le livre n\'est pas valide';
    res.redirect('/books');
  } else {
    session.resultNew = 'Le livre a été ajouté';
    app.db.collection('livres').insert({'ISBN':isbn, 'titre':titre, 'auteur':auteur, 'dateachat':dateachat, 'etat': etat,'thematiques':thematiques, 'prets':''})
    res.redirect('/books');
  }
});

app.post('/books/delete/:id', function(req, res) {
  var id = new mongodb.ObjectId(req.params.id);

  app.db.collection('livres').remove({'_id': id});
  session.resultDelete = 'Le livre a été supprimé';
  res.redirect('/books');
});

MongoClient.connect('mongodb://localhost:27017/bibliotheque', function(err, db) {
  app.db = db;
  app.listen(8000);
  console.log("Express server started on 8000");
});
