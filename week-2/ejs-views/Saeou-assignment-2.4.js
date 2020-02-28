/*
============================================
; Title:  Saeou-assignment-2.=4
; Author: Joann Saeou
; Date:   27 February 2020
; Description: EJS-Views  week-2 Javascript
;===========================================
*/

//start program

//returns a header file
var header = require('../../Saeou-header');

//outputting the header with my firstname, lastname, and assignment

console.log(header.display("Joann", "Saeou", "Assignment-2.4"));

// uses the express nodejs module. 

var http = require("http");

var express = require("express");

var path = require("path");

//create an object of express module
var app = express();


//to  set view the  folder path
app.set("views", path.resolve(__dirname, "views"));


//to use the EJS templating engine.
app.set("view engine", "ejs");

//create a callback function
app.get("/", function(request, respond) {
    respond.render("index", {
        firstName: 'Joann',
        lastName: `Saeou`,
        address: `428 Morgan Woods Dr. Fenton, MO 63026`,


    });
});



// create a server application to listen on port 8080

http.createServer(app).listen(8080, function() {

    console.log("ejs-views app started on port 8080.");

});





// end program