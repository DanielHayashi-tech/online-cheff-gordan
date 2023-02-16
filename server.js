// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use( express.static( "public" ) );

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/getconnected', function(req, res) {
    res.render('pages/community');
});

app.get('/recipes', function(req, res) {
    res.render('pages/recipepage');
});

app.get('/shop', function(req, res) {
    res.render('pages/shopping');
});

app.listen(8080);
console.log('8080 is the magic port');
