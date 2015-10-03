'use strict';

var data = {
  g: 'http://www.google.com'
};

var mappings = {
  get: function (alias, callback) {
    if (!data[alias]) {
      return callback(new Error('URL not found.'));
    }

    callback(null, data[alias]);
  }
};

module.exports = mappings;
