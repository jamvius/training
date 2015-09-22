 var net = require('net')
 var strftime = require('strftime') // not required in browsers

 var server = net.createServer(function (socket) {
 	var msg = strftime('%Y-%m-%d %H:%M');
   	socket.write(msg);
   	socket.end();
 })
 server.listen(process.argv[2])