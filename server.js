/**
 * Created by ameyutturkar on 5/25/17.
 */

var express = require('express'); // loads express library, this library can be found in the node module
var app = express(); // creates instance of express

app.use(express.static(__dirname + '/public')); //all static content is going to be in the public folder in the current dir

app.listen(3000); //to listen to incoming requests, 3000 is a very common port for dev