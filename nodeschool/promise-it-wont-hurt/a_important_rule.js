var q = require('q');

function iterate (num) {
  console.log(num);
  return ++num;
};

function throwMyGod () {
  throw new Error("OH NOES");
};

var promise = q.fcall(iterate, 1)
for (var i = 1; i < 9; i++) {
	promise = promise.then(iterate)
	if (i == 4) {
		promise = promise.then(throwMyGod)
	}
}
promise.then(null, console.log);