var module = require('./makeitmodular-module.js');

callback = function(err, list) {
	if (err) {
		console.log("Hubo un error", err);
	}
	list.forEach(function(file) {
		console.log(file);
	})
}

module(process.argv[2], process.argv[3], callback);
