const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "2020",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;