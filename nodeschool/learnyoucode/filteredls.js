var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var extension = "." + process.argv[3];
fs.readdir(directory, function(err, list) {
	for (i=0;i<list.length;i++) {
		var ext = path.extname(list[i]);
		if (ext == extension) {
			console.log(list[i]);	
		}
	}
});