'use strict';

var http = require('http');

var connect = require('connect');

var logger = require('./logger'),
    mappings = require('./data/mappings');

var app = connect();

app.use(logger('redirector'));
app.use(logger('redirector'));

app.use(function (req, res) {
  mappings.get(req.url, function (err, mapping) {
    if (err) {
      res.writeHead(404);
      return res.end();
    }

    res.writeHead(302, { location: mapping });
    res.end();
  });
});

http.createServer(app).listen(3000);
