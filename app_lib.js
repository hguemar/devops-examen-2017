var express = require('express');
var cons = require('consolidate');
var bodyParser = require('body-parser');
var app = express();

app.engine('html', cons.pug);
app.set('view engine', 'html');
app.set('views',  __dirname +  '/views');
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render("index");
});

app.listen(8080);