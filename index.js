const express = require('express')

// Objeto para llamar a los Metodos()
const app = express()

//Confiuracion de la ruta inicial
app.get("/", function(req,res){
    res.send("<h1>Primer Servidor")
})

//Configuracion del Puerto
app.listen(3000, function(){
    console.log("Servidor Creado: http://localhost:3000");
})