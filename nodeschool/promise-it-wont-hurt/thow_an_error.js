var q = require('q');

function parsePromised(filename) {
  var def = q.defer();
  var result;

  try {
    result = JSON.parse(filename);
  } catch (e) {
    def.reject(e);
  }

  def.resolve(result);
  return def.promise;
};

parsePromised(process.argv[2])
.then(null, console.log);