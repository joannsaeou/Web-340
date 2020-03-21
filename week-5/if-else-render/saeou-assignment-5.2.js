/*
============================================
; Title:  Saeou-assignment-5.2.js
; Author: Joann Saeou
; Date:   13 March 2020
; Description: demonstrates if-else-render week 5
;===========================================
*/

//start program

//returns a header with my file
var header = require('../../Saeou-header');

//outputting the header with my firstname, lastname, and assignment

console.log(header.display("Joann", "Saeou", "Assignment-5.2"));

var express = require("express");

var http = require = ("http");

var path = require("path");

var app = express();

app.set("view engine", "ejs");

app.set("views", path.resolve(__dirname, 'views'));


var composers = [
    "Bach",
    "Mozart",
    "Beethoven",
    "Verdi"


];









app.get("/", function(request, respond) {



    response.render("index", {

        names: composers

    });
});


//create server application to listen on port 8080
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");
});