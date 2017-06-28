var express = require('express');
var cons = require('consolidate');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb');

// var Task = require('./class/task.js');

app.engine('html', cons.pug);
app.set('view engine', 'html');
app.set('views', __dirname + '/views')


app.get('/', function (req, res) {
    // res.render("index", {
    //     "name": "pug"
    // });
    res.redirect('/books');
});

app.get('/books', function (req, res) {
    render(res);
});

function render(res) {
    var query = {
        "name": '2em tache'
    };

    app.db.collection('book').find().toArray(function (err, book) {
        console.log(book);
        res.render("booksView", {
            "books_array": book
        });
        console.log(book[0].title);

    });

}

//
// ADD BOOK
//
app.post('/books/new', function (req, res) {

    //ajoute la tache
    // res.render("index", {
    //     "name": "tache ajouté"
    // });
    //db.task.insert({'name': 'test', 'date':'2017-06-06', 'label':'testlabel'})

    app.db.collection('book').insert(req.body);

    console.log(req.body);

    console.log("redirection add ok");
    res.redirect('/tasks');
});

//
// DELETE BOOK
//
app.get('/books/delete/:id', function (req, res) {

    //app.db.collection('book').insert(req.body);
    app.db.collection('book').remove({
        _id: new Server.ObjectId(req.params.id)
    });
    res.redirect('/books');
});

app.get('/books/:id', function (req, res) {
    app.db.collection('book').find({ _id: new Server.ObjectId(req.params.id) }).toArray(function (err, bookDetails) {
        res.render("detailView", {
            'book_details': bookDetails
        });
        console.log(bookDetails);
    });
});

app.get('*', function (req, res) {
    res.send("Page not found", 404);
});

MongoClient.connect('mongodb://localhost:27017/booksDb', function (err, db) {
    app.db = db;
    app.listen(8000);
    console.log("Express server started on 8000");
});

//app.listen(8000);