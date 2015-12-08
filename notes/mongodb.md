docker run --name edx-mongo -d mongo: Arrancar una instancia de mongo en docker

db.users.createIndex( { name: 1 }); : Crear indice por el campo name en la BBDD users
db.users.findOne( {}, {data: 0} ) : Excluye el campo data del la consulta

Mongoose by default produces a collection name by passing the model name to the utils.toCollectionName method. This method pluralizes the name. Set this option if you need a different name for your collection