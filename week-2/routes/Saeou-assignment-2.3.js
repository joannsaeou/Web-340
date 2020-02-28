/*
============================================
; Title:  Saeou-assignment-2.3
; Author: Joann Saeou
; Date:   27 February 2020
; Description: routes  week-2 Javascript
;===========================================
*/

//start program

//returns a header file
var header = require('../../Saeou-header');

//outputting the header with my firstname, lastname, and assignment

console.log(header.display("Joann", "Saeou", "Assignment-2.3"));

// require the express module - nodejs
var express = require('express');

var http = require("http");

//create an object of express module
var app = express();

//create a callback function

app.get("/", function(request, respond) {

    respond.end("Welcome to the homepage!");

});

//create a callback function for about
app.get("/about", function(request, respond) {

    respond.end("Welcome to the about page!"); //a respond to manually end the process
});


//create a callback function for contacts
app.get("/contact", function(request, respond) {

    respond.end("Welcome to the contact page!");

});

// to load a middleware function 
app.use(function(request, respond) {

    respond.statusCode = 404;

    respond.end("404!"); //a respond to manually end the process


});

//create a server with application listen on  port 8080
http.createServer(app).listen(8080);


//end program