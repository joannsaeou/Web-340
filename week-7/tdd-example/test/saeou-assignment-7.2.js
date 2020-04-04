/*
============================================
; Title:  Saeou-assignment-7.2.js
; Author: Joann Saeou
; Date:   30 March 2020
; Description: demonstrates tdd-example   week 7
;===========================================
*/

//start program

//returns a header with my file
var header = require('../../../Saeou-header');

//outputting the header with my firstname, lastname, and assignment

console.log(header.display("Joann", "Saeou", "Assignment-7.2"));



//to require assert
var assert = require("assert");

//a suite to describe string#split
describe("String#Split", function() {

    //mocha level to run array of fruits
    it("should return an array of fruits", function() {

        assert(Array.isArray('Apple,Orange,Mango'.split(','))); // assert to run array

    });

});


function getFruits(str) {

    return str.split(',');


}

module.exports = getFruits;
