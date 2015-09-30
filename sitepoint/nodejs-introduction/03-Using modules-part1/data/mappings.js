'use strict';

// En nodejs todo es asincrono y no existe el concepto de esperar,
// Por lo q es mejor devolver un callback que se ejecute cuando estan los datos, q directamente los datos que seria sincrono
// El formato de los callback (buenas practicas) es callback(error, data)

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
