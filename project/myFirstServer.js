process.env.PORT || 3000
var http = require('http');
//var dt = require('./myDate');
//var myTestModule = require('./myModule');

var url = require('url');
var uc = require('upper-case');
var fs = require('fs');

var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)
