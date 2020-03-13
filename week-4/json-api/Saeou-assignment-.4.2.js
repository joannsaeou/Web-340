/*
============================================
; Title:  saeou-assignment-4.2.js
; Author: Joann Saeou
; Date:   12 March 2020
; Description: Demonstrates how to return JSON from
;              a Node.js server.
;===========================================
*/


//returns a header with my file
var header = require('../../Saeou-header');

//outputting the header with my firstname, lastname, and assignment

console.log(header.display("Joann", "Saeou", "Assignment-4.2"));


var express = require("express");

var http = require("http");

var app = express();

app.use(logger('dev'));

app.get("/customer/:id", function(request, response) {

    var id = parseInt(request.params.id, 10);

    response.json({ //creating a response with  json object 

        firstName: "Joann",

        lastName: "Saeou",

        employeeId: id

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});