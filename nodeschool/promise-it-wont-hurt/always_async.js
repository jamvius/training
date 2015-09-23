var q = require('q');
var def = q.defer();

def.promise.then(console.log);
def.resolve("SECOND");

console.log("FIRST");

// Se imprime FIRST, SECOND
// Las promesas se ejecutan de forma asincrona, y por tanto,
// Se ejecuta cuando acaba el thread principal