const express = require('express');
const morgan = require('morgan');
const productoRoute = require("./src/Routes/rutas.js");

const servidor = express(); // Crea una nueva instancia de Express

servidor.use(morgan("dev")); // Usa morgan para el arranque

servidor.set('port', 3000); // Se se indica el puerto

servidor.use("/api/producto", productoRoute); // Usa las rutas definidas Routes/rutas.js

servidor.listen(servidor.get('port'), () => {
    console.log("Estás corriendo por el puerto 3000");
}); // Escucha las peticiones en el puerto configurado