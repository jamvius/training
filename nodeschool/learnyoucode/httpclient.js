var http = require('http');
var url = process.argv[2];
var callback = function(response) {
	response.setEncoding('utf8')
	response.on("data", console.log);
	response.on("error", console.error);
}
result = http.get(url, callback);