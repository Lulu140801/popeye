const express = require("express");
const app = express();
const mysql = require('mysql2');
const env = require('dotenv').config();

const connection = mysql.createConnection ({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("T'es connecté a la db frérot!");
})

app.get("/")
module.exports = connection;