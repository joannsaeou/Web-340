/*
============================================
; Title:  Saeou-assignment-4.4.js
; Author: Joann Saeou
; Date:   13 March 2020
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/


var express = require("express");

var http = require("http");

var app = express();

//callback function to SEND a GET request
app.get("/", function(request, response) {
    response.send("API invoked as an HTTP GET Request.");

});

//callback function to SEND  a PUT request
app.put("/", function(request, response) {
    response.send("API invoked as an HTTP PUT Request. ");

});

//callback function to SEND  a POST request
app.post("/", function(request, response) {
    response.send("API invoked as an HTTP POST Request.");
});

app.delete("/", function(request, response) {
    response.send("API invoked as an HTTP DELETE Request. ");
});

// create server application to listen on port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});