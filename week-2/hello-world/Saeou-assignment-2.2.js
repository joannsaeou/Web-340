/*
============================================
; Title:  Saeou-assignment-2.2
; Author: Joann Saeou
; Date:   26 February 2020
; Description: hello world with express week-2
;===========================================
*/

//start program

//returns a header 
var header = require('../../Saeou-header');

//outputting the header with my firstname, lastname, and assignment

console.log(header.display("Joann", "Saeou", "Assignment-2.2"));

// entering variable express with require syntax 
var express = require('express');
var http = require('http');


var app = express();


app.use(function(req, res) {
    console.log('In comes a request to: %s', req.url); //outputting result into the console

    res.end('Hello World\n');
})

http.createServer(app).listen(8080, function() {
    console.log('Application started on port %s', 8080); //output result into the port server 8080
})

//end program