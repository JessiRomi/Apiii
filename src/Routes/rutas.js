const { Router } = require('express');
const { getProductos, createProductos, getProductosById, updateProductos, deleteProductos } = require("../Contrllers/controles")

const route = Router();

route.get("/", getProductos); //  para obtener todos los productos
route.get("/:id", getProductosById); //para obtener un producto por su id    
route.post("/", createProductos); // para crear un nuevo producto
route.put("/:id", updateProductos); // para actualizar un producto por su id
route.delete("/:id", deleteProductos); //para eliminar un producto por su id

module.exports = route;