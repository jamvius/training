npm run test-kitten: Ejecutar el comando "test-kitten" definido en el package.json, en la parte de scripts

EXPRESS

app.use([path,] function [, function...]): Añade un mapeo y la funcion que lo procesa. Si no se pone path, se mapea a la raiz

http://expressjs.com/en/api.html#app.use

WAGNER

Sistema de DI. Para insertar elementos

wagner.factory('Category', function() {
    return Category;
  });

 Para inyectar dependencias en otros metodos

 wagner.invoke(function(Category) {
 }

 Donde Category es el nombre que se ha añadido con wagner.factory