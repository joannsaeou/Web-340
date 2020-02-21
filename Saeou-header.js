/*
============================================
; Title:  header-.js
; Author: Joann Saeou
; Date:   20 February 2020
; Description: Header for web-340
;===========================================
*/







exports.display = function(firstName, lastName, assignment) {
    let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' +
        new Date().toLocaleDateString('en-US')

    return output
}


/*
  Output:
  Joann Saeou
  Header.js
  Date: 02/20/20
*/