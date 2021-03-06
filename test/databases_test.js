"use strict"

var assert = require('assert');

var Database = require('../models/database');
var db = new Database();

describe('Database', function() {
  describe('#build_query()', function() {
    it('should return the correct query string', function() {
    	var test_string = "SELECT * FROM ?? WHERE id = ?";
    	var test_values = ['user', 1234]
    	var expected_string = "SELECT * FROM `user` WHERE id = 1234";

    	var result = db.build_query(test_string, test_values);
      	assert.equal(result, expected_string);
    });
  });

  describe('#copy_table()', function() {
  	it('should properly copy a table', function(done) {
  		var callback = function(err, success) {
  			if(err) console.log(err);
  			assert.equal(success, true);
  			done()
  		}
  		db.copy_table('chats', callback);
  	})
  })

  describe('#delete_table()', function() {
  	it('should properly delete a table', function(done) {
  		var callback = function(err, success) {
  			if(err) console.log(err);
  			assert.equal(success, true);
  			done()
  		}
  		db.delete_table('TEST_chats', callback);
  	})
  })
});