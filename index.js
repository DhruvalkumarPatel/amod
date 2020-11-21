// load the things we need
var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const user = require("./routes/user");
const Usermodel = require("./model/User");
const BusinesslistModel = require("./model/BusinessListModel");


const InitialMongoServer = require("./config/db");
const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://Dhruval:Mataji@dhruval.keooz.mongodb.net/Dhruval?retryWrites=true&w=majority";


mongoose.connect(mongoURI,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
});

const connect1 = mongoose.connect1;
connect1.once("open",() => {
    console.log("connected to dhruval MongoDB");
}
);
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))

app.use(bodyParser.urlencoded({extended: true}));

app.use("/user", user);

// localhost will load 
app.get('/', function(req, res) {
    res.render('pages/home');
});

app.get('/businesslist', async function(req,res) {
    try{
        const businesslistmodel = await BusinessListModel.find()
        res.render('pages/businesslist',{'businesslists': businesslistmodel});
    }
    catch(error){
        console.log({error})
    }
});

app.post('/businesslist', async function(req,res){

})

app.get('/home', function(req, res) {
    res.render('pages/home');
});
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/project', function(req, res) {
    res.render('pages/project');
});

app.get('/update', function(req, res) {
    res.render('pages/update');
});

app.get('/service', function(req, res) {
    res.render('pages/service');
});

app.get('/contact', function(req, res) {
    res.render('pages/contact');
});
app.listen(process.env.PORT || 8080);
console.log('8080 is the magic port');