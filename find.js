//1.rescatando el argumento que es pasando al script
var ageArgument = +process.argv[2];

//conectarnos a la base de datos
//paso1. Cargar el driver en nuestro script
var mongodb = require('mongodb');
//paso2. El driver de mongodb nos proporciona un cliente por lo que lo extraempos de la libreria
var mongoClient = mongodb.MongoClient;
//pase3. Conectamos el cliente con la base de datos
mongoClient.connect("mongodb://127.0.0.1:27017/learnyoumongo",
function(err, db){
    //lo primero que se tiene que verificar es ver si hubo un error
    if(err){
        console.log(">Error al conectarse a: "+
        'mongodb://127.0.0.1:27017/learnyoumongo');
    throw err;
    }
    //obteniendo la colleccion
    var parrotsCollection = db.collection('parrots');
    //aplicando un query sobre la coleccion
  var objetoResultado = parrotscollection.find({
            age : {$gt : ageArgument}
    });
    //
    objetoResultado.toArray(function(err, docs)
    {console.log(docs)
        //cerrabdo base de datos
        db.close();

    });

});
