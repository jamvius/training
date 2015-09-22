var fs = require('fs');
buffer = fs.readFile(process.argv[2], function doneReading(err, fileContents) {
	//console.log(fileContents.toString());
	var lines = fileContents.toString().split('\n').length - 1
	console.log(lines);	
	}
);

