// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/home');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/project', function(req, res) {
    res.render('pages/project');
});

app.get('/service', function(req, res) {
    res.render('pages/service');
});

app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.listen(process.env.PORT || 8080);
console.log('8080 is the magic port');