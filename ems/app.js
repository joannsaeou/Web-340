/*
============================================
; Title: Saeou-Assignment5.4
; Author: Joann Saeou
; Date: 27 March 2020

; Description: Demonstrates milestone 1 and 2
============================================
*/

var header = require('../Saeou-header');
console.log(header.display('Joann', 'Saeou', 'Saeou-assignment-5.4.js'))

//Requires the Morgan module for logging
var logger = require("morgan");


var express = require('express');


var http = require('http');

var path = require('path');

//const ejsLint = require('ejs-lint');

//Calls the express function to start a new Express application
var app = express();

//Tell Express the views are in the views directory
app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));
//get the employee parameter from the request 
app.get("/", function(request, response) {

    response.render("index", {

        message: "home page",



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

    })

});

app.get("/products", function(request, response) {

    response.render("products", {

        message: "products page"

    });

});


app.get("/footer", function(request, response) {

    response.render("footer", {

        message: "footer page"

    });

});

app.get("/scripts", function(request, response) {

    response.render("scripts", {

        message: "welcome to my scripts page"

    })

});

http.createServer(app).listen(5000, function() {

    console.log("Application started on port 5000");

});