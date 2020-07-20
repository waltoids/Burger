const orm = require('../config/orm')

const burgers = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertBurger: function(columns, values, cb) {
      orm.insertOne("burgers", columns, values, function(res) {
        cb(res);
      });
    },
    updateBurger: function(column, colValue, field, fieldValue, cb) {
      orm.updateOne("burgers", column, colValue, field, fieldValue, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burgersController.js).
  module.exports = burgers;
  