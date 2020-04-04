/*
============================================
; Title:  Saeou-assignment-7.4.js
; Author: Joann Saeou
; Date:   04 April 2020
; Description: demonstrates model/mongo connection   week 7
;===========================================
*/

//start program

//returns a header with my file
var header = require('../../Saeou-header');

//outputting the header with my firstname, lastname, and assignment

console.log(header.display("Joann", "Saeou", "Assignment-7.4"));

//require statements

const mongoose = require("mongoose");

const schema = mongoose.Schema;

//employe Schema

let EmployeeSchema = new Schema({

    firstName: { type, String, required: true },
    lastName: { type, String, required: true }


});

//define the employee model

var Employee = mongoose.model("Employee", employeeSchema);



//expose the employee to calling files



module.exports = Employee;
