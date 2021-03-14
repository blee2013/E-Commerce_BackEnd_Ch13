const mysql = require('mysql2');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "the password"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});