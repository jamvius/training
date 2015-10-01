'use strict';

var data = {
  g: 'http://www.google.com'
};

var mappings = {
  get: function (url, callback) {
    var alias = url.substring(1);

    if (!data[alias]) {
      return callback(new Error('URL not found.'));
    }

    callback(null, data[alias]);
  }
};

module.exports = mappings;
