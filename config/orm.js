// Import MySQL connection.
const connection = require('./connection');

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

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
        const queryString = "INSERT INTO " + tableName + " (" + columns.toString() + ") VALUES (?) ";
    
        connection.query(queryString, values, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
     updateOne: function(tableName, objColVals, condition, cb) {
        let queryString = "UPDATE " + tableName;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }
    };

    module.exports = orm;