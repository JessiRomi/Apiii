const Productos = require("../Moldels/modelos.js");
const { Request, Response } = require("express");

exports.getProductos = async (req, res) => {
    const producto = await Productos.findAll();
    console.log({ producto }); // Se obtienen todos los registros de la BBDD
    res.json(producto); // Responde en formato JSON
};

exports.createProductos = async (req, res) => {
    const newProd = await Productos.create(req.body); // Se crea un nuevo artículo 
    res.json({
        ok: true,
        message: "El productos fue creado con éxito",
        producto: newProd // Devuelve el producto creado
    });
};

exports.getProductosById = async (req, res) => {
    const producto = await Productos.findByPk(req.params.id); // Busca un producto por su ID
    res.json(producto); 
};

exports.updateProductos = async (req, res) => {
    const [updated] = await Productos.update(req.body, {
        where: { idProductos: req.params.id }
    }); // Actualiza el producto con los datos del cuerpo de la petición
    const updatedProductos = await Productos.findByPk(req.params.id); // Busca el producto actualizado
    res.json(updatedProductos); // Responde con el producto actualizado
};

exports.deleteProductos = async (req, res) => {
    await Productos.destroy({
        where: { idProductos: req.params.id }
    }); // Elimina el producto por su ID
    res.status(204).json(); // Responde con un estado 204 
};