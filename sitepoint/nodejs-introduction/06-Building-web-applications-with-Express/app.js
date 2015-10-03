'use strict';

// Para usar express necesitaremos instalar:
// - npm install express
// Para usar el engine ejs necesitamos instalar (no es necesario cargarlo, ya que lo carga express al definir el engine:
// - npm install ejs 
// Express añade a response el metodo send que permite escribir directamente la salida res.send("hello word")
// o si se pone un numero devuelve una pagina con ese status code res.send(404)
// si escribimos un objeto, devuelve un json (application/json)
// Tb añade la funcion redirect al response que simplifica hace la redireccion

var http = require('http'),
    path = require('path');

var express = require('express');

var logger = require('./logger'),
    mappings = require('./data/mappings');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('redirector'));

// Se pueden mapear peticiones utilizando app.get, app.post, app.put
app.get('/', function (req, res) {
  res.render('index', {
    mappings: 'Hello world from EJS!'
  });
});

// Se puede usar alias en las url (precedidos con dos ptos) y despues se puede acceder al valor
// desde para variable req.params.alias
// Si el alias tiene ? es opcional /:alias?
app.get('/:alias', function (req, res) {
  mappings.get(req.params.alias, function (err, mapping) {
    if (err) { res.send(404); }
    res.redirect(mapping);
  });
});

http.createServer(app).listen(3000);
