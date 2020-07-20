// Import MySQL connection.
const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
const orm = {
    selectAll: function(tableName, cb) {
      const queryString = "SELECT * FROM " + tableName + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(tableName, columns, values, cb) {
        const queryString = "INSERT INTO " + tableName + " (" + columns.toSting() + ") VALUES (?) ";
    
        connection.query(queryString, values, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
     updateOne: function(tableName, column, colValue, field, fieldValue, cb) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    
        console.log(queryString);
        connection.query(queryString, [tableName, column, colValue, field, fieldValue], function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
    };

    module.exports = orm;