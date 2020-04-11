/*
============================================
; Title: app.js
; Author: Joann Saeou
; Date: 08 April 2020
; Description: updated app.js to week-8 assignment (XSS security)
============================================
*/

var header = require('../Saeou-header');
console.log(header.display('Joann', 'Saeou', 'Saeou-assignment-8.4.js'))

//Requires the Morgan module for logging
var logger = require("morgan");


var express = require('express');

var helmet = require("helmet");


var http = require('http');

var path = require('path');

// to use CSURF libary

var bodyParser = require("body-parser");

var cookieParser = require("cookie-parser");

var csrf = require("csurf");


//to setup csrf  protection

var csrfProction = csrf({ cookie: true });





//require employee logging module

//var employee = require("employee");


//ejs lint

const ejsLint = require("ejs-Lint");



//Calls the express function to start a new Express application
var app = express();

//Tell Express the views are in the views directory
app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));
//get the employee parameter from the request
app.get("/", function(request, response) {

    response.render("index", {

        message: "home page",



    });

});

app.get("/about", function(request, response) {

    response.render("about", {

        message: "about page"

    });

});

app.get("/contact", function(request, response) {

    response.render("contact", {

        message: "contact page"

    })

});

app.get("/products", function(request, response) {

    response.render("products", {

        message: "products page"

    });

});


app.get("/footer", function(request, response) {

    response.render("footer", {

        message: "footer page"

    });

});

app.get("/scripts", function(request, response) {

    response.render("scripts", {

        message: "welcome to my scripts page"

    })

});

//HTTP POST

app.post("/process", function(request, response) {

    // console.log(request.body.txtName);

    if (!request.body.txtName) {

        response.status(400).send("Entries must have a name");

        return;

    }


    app.get("/list", function(request, response) {
        Employee.find({}, function(error, fruits) {
            if (error) throw error;
            response.render("list", {
                title: "Employee List",
                employees: employees
            });
        });
    });














    //mongos atlas guide

    var mongoDB = "mongodb+srv://jsaeou:4pqDov4glSo70Os2@buwebdev-cluster-1-2eedp.mongodb.net/test?authSource=admin&replicaSet=buwebdev-cluster-1-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true";

    mongoose.connect(mongoDB, {

        useMongoClient: true


    });

    mongoose.Promise = global.Promise;

    var db = mongoose.connection;

    db.on("error", console.error.bind(console, "MongoDB connection error: "));

    db.once("open", function() {

        console.log("Application connected to MongoDB instance");


    });

    //application

    var app = express();

    app.use(logger("short"));

    //model

    var employee = new Employee({

        name: "Ash Ketchum"


    });

    // use helmet/cookieparser/bodyparser statement

    app.use(logger("short"));

    app.use(helmet.xssFilter());

    app.use(bodyParser.urlencoded({

        extended: true


    }));


    app.use(cookieParser());

    app.use(csrfProtection);

    app.use(function(request, response, next) {

        var token = request.csrfToken();

        response.cookie('XSRF-TOKEN', token);

        response.locals.csrfToken = token;

        next();



    });




    //set view  statement

    app.set("views", path.resolve(__dirname, "views"));

    app.set("view engine", "ejs");

    //http XSS calls

    app.get("/", function(request, response) {


        response.render("index", {

            message: "XSS Prevention Example"



        });

    });


    // HTTP POST

    app.post("/process", function(request, response) {

        console.log(request.body.txtName);

        response.redirect("/");


    });







});


http.createServer(app).listen(3000, function() {

    console.log("Application started on port 3000");
});
