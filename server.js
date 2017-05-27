/**
 * Created by ameyutturkar on 5/25/17.
 */

var express = require('express'); // loads express library, this library can be found in the node module
var app = express(); // creates instance of express
var bodyParser = require('body-parser'); //to configure express to parse html
var mongoose = require('mongoose'); //mongoose is the library that allows us to programmatically connect to the mongodb
mongoose.connect('mongodb://localhost/blog'); //creates a live connection to database, 'blog' is db name

app.use(express.static(__dirname + '/public')); //all static content is going to be in the public folder in the current dir
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/api/blogpost", createPost); //to listen to incoming requests, //map it to a local function to handle requests

function createPost(req, res) {
    var post = req.body;
    console.log(post);
    res.json(post); //just echoing the request to make the req res cycle complete
}

app.post("/api/blogpost", createPost); //to listen to incoming requests, //map it to a local function to handle requests

function createPost() {
    console.log("hello from server createPost()");
}

app.listen(3000); //to listen to incoming requests, 3000 is a very common port for dev