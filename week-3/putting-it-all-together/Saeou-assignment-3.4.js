/*
============================================
; Title:  Saeou-assignment-3.4.js
; Author: Joann Saeou
; Date:   06 March 2020
; Description: putting-it-all-together  week 3
;===========================================
*/

//start program

//returns a header with my file
var header = require('../../Saeou-header');

//outputting the header with my firstname, lastname, and assignment

console.log(header.display("Joann", "Saeou", "Assignment-3.4"));



// program start
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");


// use express nodejs module 

const ejsLint = require('ejs-lint');

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express(); //create an object of express module 


//to setup view engine 
app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));


//create a callback function to homepage
app.get("/", function(request, response) {

    response.render("index", {

        message: "home page"

    });

});

app.get("/about", function(request, response) {

    response.render("about", {

        message: "about page"

    });

});

app.get("/contact", function(request, response) {

    response.render("contact", {

        message: "contact page"

    });

});

app.get("/product", function(request, response) {

    response.render("product", {

        message: "product page"

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080.");

});