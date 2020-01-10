const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "db_peradilan"
});

connection.connect(err => {
  if (err) throw err;
  console.log("database connected!");
});

module.exports = connection;
