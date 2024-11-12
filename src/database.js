const {Sequelize} = require("sequelize"); 

const miConexion = new Sequelize('productos',"root","",{
    host: "localhost",
    dialect: "mysql"
}); // Configuración para la conexión con la BBDD

(async ()=>{ // Función autoejecutable asincrónica para autenticar la conexión con la BBDD
    try {
        await miConexion.authenticate(); // Hace la conexion a la BBDD
        console.log("Conexión exitosa");
    }
    catch(err){
        console.error("Error de conexión",err);
    }
})();

module.exports= miConexion