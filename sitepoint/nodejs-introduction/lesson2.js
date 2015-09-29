'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
	var verb = req.method,
		url = req.url;
	res.writeHead(200, {
		'content-type': 'text/html'
	})
	res.write('Hello world! ' + verb + ' ' + url);
	// es necesario cerrar la conexion
	res.end();
});

server.listen(3000);