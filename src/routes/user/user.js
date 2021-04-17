const mysql = require('mysql2');
const express = require("express")
const rt = express.Router();
const query = require("./user.query");

rt.post("/register", query.registerUser)

module.exports = rt;const rt = express.Router();
