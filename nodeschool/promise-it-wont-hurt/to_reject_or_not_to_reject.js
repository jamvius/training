var q = require('q');
var def = q.defer();

def.promise.then(console.log, console.log);
def.resolve("I FIRED");
// La promesa solo puede cambiar una vez de estado, por tanto solo ejecuta la primera
def.reject("I DID NOT FIRE");