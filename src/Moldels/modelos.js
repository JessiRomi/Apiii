const { DataTypes } = require("sequelize");
const miConexion = require("../database.js");

//.......construcción de la BBDD...............

const Productos = miConexion.define("producto", {
    idProductos: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    imagen: {
        type: DataTypes.STRING(255),
        allowNull: true 
    }
});

// Sincronización del modelo con la BBDD
(async () => {
    try {
        await miConexion.sync({ alter: true }); // El alter mantiene el estado de las tablas
        console.log("Sincronización completa");
    } catch (err) {
        console.error("Falló la sincronización con la BBDD", err);
    }
})();

// Exporta el modelo 'Productos' para que pueda ser utilizado en otros módulos
module.exports = Productos;