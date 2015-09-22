var fs = require('fs');
var path = require('path');

module.exports = function(directory, extension, callback) {
	fs.readdir(directory, function(err, list) {
		var result = [];
		if (err) 
			return callback(err);
		
		result = list.filter(function(file) {
			var ext = path.extname(file);
			return (ext === "." + extension); 
		});
		callback(null, result);	
	});	
}