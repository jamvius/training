'use strict';

var http = require('http');

// Se puede obviar el .js
// se pueden usar las carpetas como namespaces
var mappings = require('./data/mappings');

var server = http.createServer(function (req, res) {
  mappings.get(req.url, function (err, mapping) {
    if (err) {
      res.writeHead(404);
      return res.end();
    }

    res.writeHead(302, { location: mapping });
    res.end();
  });
});

server.listen(3000);
