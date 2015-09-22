var http = require('http');
var url = require('url');

function unixFormat(date) {
  return {
      "unixtime": date.getTime()
 };
}

function hourFormat(date) {
	return {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    }
}

var server = http.createServer(function (request, response) {
  if (request.method != 'GET') {
  	return response.end('send me a GET\n');	
  }
  var urlInfo = url.parse(request.url, true);
  var date = new Date(urlInfo.query.iso);

  response.writeHead(200, { 'content-type': 'application/json' });
  if (urlInfo.pathname === '/api/parsetime') {
  	response.write(JSON.stringify(hourFormat(date)));	
  }
  else if (urlInfo.pathname === '/api/unixtime') {
  	response.write(JSON.stringify(unixFormat(date)));	
  }
  else {
  	response.write(JSON.stringify(urlInfo.pathname));	
  }
  response.end();
});

server.listen(process.argv[2]);