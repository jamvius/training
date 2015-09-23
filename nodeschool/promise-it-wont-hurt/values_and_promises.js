var q = require('q');
var def = q.defer();

function attachTitle(name) {
  return "DR. " + name;
}

def.promise
.then(attachTitle)
.then(console.log);

def.resolve("MANHATTAN");