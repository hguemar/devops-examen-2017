var express = require('express');
var cons = require('consolidate');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;

// var Task = require('./class/task.js');

app.engine('html', cons.pug);
app.set('view engine', 'html');
app.set('views', __dirname + '/views')


app.get('/', function (req, res) {
    // res.render("index", {
    //     "name": "pug"
    // });
    res.redirect('/tasks');
});

app.get('/tasks', function (req, res) {
    // app.db.collection('task').findOne({}, function (err, doc) {
    //     res.render("index", {
    //         "task_array":doc
    //         //"name":doc.name
    //     });
    //     //console.log(doc);
    // });


    render(res);

    // var test = app.db.collection('task').find(query);
    // console.log(test);
    // var oTask = new Task;
    // oTask.show();

});

function render(res) {
    var query = {
        "name": '2em tache'
    };

    app.db.collection('task').find().toArray(function (err, task) {
        //console.log(task);
        res.render("tasks", {
            "task_array": task
        });
        console.log(task[0].name);


    });

}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

app.post('/tasks/add', function (req, res) {

    //ajoute la tache
    // res.render("index", {
    //     "name": "tache ajouté"
    // });
    //db.task.insert({'name': 'test', 'date':'2017-06-06', 'label':'testlabel'})

    app.db.collection('task').insert(req.body);
    console.log(req.body);

    console.log("redirection add ok");
    res.redirect('/tasks');
});

app.get('*', function (req, res) {
    res.send("Page not found", 404);
});

MongoClient.connect('mongodb://localhost:27017/tp_tasks', function (err, db) {
    app.db = db;
    app.listen(8000);
    console.log("Express server started on 8000");
});

//app.listen(8000);