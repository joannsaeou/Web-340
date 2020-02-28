/*
============================================
; Title:  header-.js
; Author: Joann Saeou
; Date:   20 February 2020
; Description: Url-module for web-340
;===========================================
*/

//start program

//returns a header with my file
var header = require('../Saeou-header');

//outputting the header with my firstname, lastname, and assignment

console.log(header.display("Joann", "Saeou", "Assignment-1.3"));


var url = require("url");

var parsedURL = url.parse("https://www.example.com/profile?name=apricot");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);

//end program