let mysql = require('mysql')
let conexion = mysql.createConnection({
    host:"localhost",
    database:"prueba",
    user:"root",
    password:""
})

conexion.connect(function(err){
    if(err){
        throw err
    }else{
        console.log("CONECTADO a la BD");
    }
})



// const nuevoregistro = "INSERT INTO valores (id, nombre, numero) VALUES ('', 'Generico', '73422432')"
// conexion.query(nuevoregistro, function(error,rows){
//     if(error){
//         throw error
//     }else{
//         console.log("DATO INSERTADO");
//     }
// })


// const modificar = "UPDATE valores SET nombre = 'Box' WHERE id = 11"
//     conexion.query(modificar, function(error, lista){
//         if(error){
//             throw error
//         }else{
//             console.log("DATO MODIFICADO");
//         }
//     })

    
    const borrar = "DELETE FROM  valores WHERE id = 13"
    conexion.query(borrar, function(error,lista){
        if(error){
            throw error
        }else{
         console.log("DATO ELIMINADO");   
        }
    })
    
    const prueba = "SELECT * FROM valores"
    
    conexion.query(prueba,function(error,lista){
        if(error){
            throw error
        }else{
            console.log(lista);
            console.log("Total de registros: "+lista.length);
        }  
    })
    conexion.end()