/*
============================================
; Title:  Saeou-assignment-7.3.js
; Author: Joann Saeou
; Date:   30 March 2020
; Description: demonstrates tdd-example   week 7
;===========================================
*/

//start program

//returns a header with my file
var header = require("../../Saeou-header");

//outputting the header with my firstname, lastname, and assignment

console.log(header.display("Joann", "Saeou", "Assignment-7.3"));


function fruits(str) {

    return str.split(",");

}

module.exports = fruits;
