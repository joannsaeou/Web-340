/*
============================================
; Title:  Saeou-assignment-3.3.js
; Author: Joann Saeou
; Date:   06 March 2020
; Description: advanced routing  week 3
;===========================================
*/

//start program

//returns a header with my file
var header = require('../../Saeou-header');

//outputting the header with my firstname, lastname, and assignment

console.log(header.display("Joann", "Saeou", "Assignment-3.3"));



// program start
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

// create an object of express module 
var app = express();

// tell Express the view is in the "views" directory
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs"); //to setup view engine
app.use(logger("short"));

//create a callback function
app.get("/:employeeId", function(request, response) {
    var employeeId = parseInt(request.params.employeeId, 10);
    response.render("index", {
        employeeId: employeeId
    })
});

//create a server application listen on port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});