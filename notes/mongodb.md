docker run --name edx-mongo -d mongo: Arrancar una instancia de mongo en docker

db.users.createIndex( { name: 1 }); : Crear indice por el campo name en la BBDD users
db.users.findOne( {}, {data: 0} ) : Excluye el campo data del la consulta