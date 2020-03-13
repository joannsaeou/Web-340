/*
============================================
; Title:  Saeou-assignment-4.3.js
; Author: Joann Saeou
; Date:   13 March 2020
; Description: demonstrates HTTP status codes   week 4
;===========================================
*/

//start program

//returns a header with my file
var header = require('../../Saeou-header');

//outputting the header with my firstname, lastname, and assignment

console.log(header.display("Joann", "Saeou", "Assignment-4.3"));


var express = require("express"); //use the express Nodejs module 

var http = require("http");

var app = express(); //create an object of express module


// callback  function 
app.get("/not-found", function(respond, request) {
    response.status(404); //status code 404 

    response.json({
        error: "Resource not found." //a respond to show error message
    })

});

//create a callback function to show  status 200 'OK'.
app.get("/ok", function(request, respond) {
    response.status(200);
    response.json({ // respond to json to display message
        message: "The Page has been loaded correctly and there is no error"

    })

});


app.get("/not-implemented", function(request, respond) {
    response.status(501); //to display status code 501 'not implemented'. 
    response.json({
        error: "Page not implemented."
    })
});

// to create a server application to listen on port 8080
http.createServer(app).listen(8080, function() {
    console.log("application started on port 8080!");
});