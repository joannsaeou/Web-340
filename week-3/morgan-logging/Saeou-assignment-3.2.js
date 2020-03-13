/*
============================================
; Title:  Saeou-assignment-3.2.js
; Author: Joann Saeou
; Date:   05 March 2020
; Description: logging morgan  week 3
;===========================================
*/

//start program

//returns a header with my file
var header = require('../../Saeou-header');

//outputting the header with my firstname, lastname, and assignment

console.log(header.display("Joann", "Saeou", "Assignment-3.2"));

// uses the express nodejs module. 
var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan"); //logger to require morgan module 


var app = express(); //create an object of express module


app.set("views", path.resolve(__dirname, "views")); //the views are in the 'view' directory

app.set("view engine", "ejs") // to use the ejs view engine 

app.use(logger("short"));

//create a callback function 
app.get("/", function(request, response) {
    response.render("index", {
        message: "Joann Saeou and Morgan ejs express view engine"

    });
});


//start server application with listen on port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});