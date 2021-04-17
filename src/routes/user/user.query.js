const mysql = require('mysql2');
const connection = require('../..');

exports.registerUser = (req, res, next) => {
    console.log(req.info);
    connection.connect(function(err) {
        console.log("Connecté");
        var info = [
            [req.info.email, req.info.password, req.info.name, req.info.firstname]
        ];
    })
}