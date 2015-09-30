'use strict';

// Stability: 0-5 (maximo) como d estable es la libreria. A parte de 3 se considera Estable
// Buscador de modulos de node http://nipstr.com/
// npm: package manager de node
// npm install <module_name>: Instala un modulo
// npm install connect: Esto lo instala en la subcarpeta node_modules con todas sus dependencias
// npm init: crea el archivo package.json que define el proyecto. Analiza la carpeta node_modules para poner las dependencias
// Recomienda quitar ~ en los numeros de versiones que indica q permite las revisiones (cambios en 0.0.X) para garantizar usar la misma version
// npm install: Instala todas las dependencias definidas en el package.json
// Esto permite no tener q subir la carpeta node_modules al repositorio


var http = require('http');

var mappings = require('./data/mappings');

var server = http.createServer(function (req, res) {
  mappings.get(req.url, function (err, mapping) {
    if (err) {
      res.writeHead(404);
      return res.end();
    }

    res.writeHead(302, { location: mapping });
    res.end();
  });
});

server.listen(3000);
