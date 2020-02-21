/*
============================================
; Title:  Saeou-assignment-1.5.js
; Author: Joann Saeou
; Date:   21 February 2020
; Description: assignment 1.5 hello world
;===========================================
*/


//returns a header with my firstname lastname and assignment
const header = require('../Saeou-header');


console.log(header.display("Joann", "Saeou", "discussion 1.5 Hello-world"));
console.log("\n");




var http = require("http");

function processRequest(req, res) {

    var body = "I want to be the very best, like no one ever was. To catch them is my real test. To train them is my cause!";


    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);