var express = require("express");
// var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var db = require("./models");
var PORT = 3000;
var app = express();
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.get("/scrape", function(req, res) {
    axios.get("https://news.yahoo.com/").then(function(response) {
       var $ = cheerio.load(response.data);
    
       $("h3").each(function(i, element) {
           var result = {};

       });
    
    });
});

app.listen(PORT, function() {
    console.log("listening at PORT: " + PORT);
});