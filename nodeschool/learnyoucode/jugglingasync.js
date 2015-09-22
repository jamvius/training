var http = require('http');
var bl = require('bl')

results = [];
count = 0;

function printResults() {
  for (var i = 0; i < 3; i++) {
  	console.log(results[i]);
  }
}

function visitUrl(index) {
	http.get(process.argv[index+2], function(response) {
	response.setEncoding('utf8');
	response.pipe(bl(function (err, data) {
	    if (err) {
	      return console.error(err);
	    }
	    results[index] = data.toString();
	    count++;
	    if (count == 3) {
	    	printResults();
	    }
	  }))  	
	});	
}

for (var i = 0; i < 3; i++) {
	visitUrl(i);
}

