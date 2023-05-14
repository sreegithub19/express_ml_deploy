var express = require("express");
var fs = require('fs');
var sys = require('sys');
var path = require('path');

var app = express();
    app.set("view options", {layout: false});
    app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile('index.html',{ root: './public' });
});

app.listen(8080);
console.log('Express server started');