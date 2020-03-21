/*
============================================
; Title:  Saeou-assignment-5.3.js
; Author: Joann Saeou
; Date:   20 March 2020
; Description: demonstrates pug templates   week 5
;===========================================
*/

//start program

//returns a header with my file
var header = require('../../Saeou-header');

//outputting the header with my firstname, lastname, and assignment

console.log(header.display("Joann", "Saeou", "Assignment-5.3"));

var express = require("express"); //to load the express module 

var http = require("http");

var pug = require("pug"); //to load pug 

var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug"); //to set view engine to pug

//route

app.get("/", function(response, request) {

    response.render("index", {

        message: "Strive not to be success, but rather to be of value. -Albert Einstein "
    });
});

//create server application

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");
});