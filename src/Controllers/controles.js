const Productos = require("../Moldels/modelos");

exports.getProductos = async (req, res) => {
    try {
        const producto = await Productos.findAll();
        res.json(producto); // Responde en formato JSON
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos", error });
    }
};

exports.createProductos = async (req, res) => {
    try {
        const newProd = await Productos.create(req.body); // Se crea un nuevo artículo 
        res.status(201).json({
            ok: true,
            message: "El producto fue creado con éxito",
            producto: newProd // Devuelve el producto creado
        });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el producto", error });
    }
};

exports.getProductosById = async (req, res) => {
    try {
        const producto = await Productos.findByPk(req.params.id); // Busca un producto por su ID
        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.json(producto); 
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el producto", error });
    }
};
exports.updateProductos = async (req, res) => {
    try {
        const idProducto = req.params.id;
        console.log("ID del producto a actualizar:", idProducto);  // Verifica que se recibe el ID correctamente

        // Actualiza el producto en la base de datos
        const [updated] = await Productos.update(req.body, {
            where: { idProductos: idProducto }
        });

        if (!updated) {
            return res.status(404).json({ message: "Producto no encontrado para actualizar" });
        }

        // Devuelve el producto actualizado
        const updatedProductos = await Productos.findByPk(idProducto);
        res.json(updatedProductos);  // Devuelve el producto actualizado
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el producto", error });
    }
};



exports.deleteProductos = async (req, res) => {
    try {
        const deleted = await Productos.destroy({
            where: { idProductos: req.params.id }
        });

        if (!deleted) {
            return res.status(404).json({ message: "Producto no encontrado para eliminar" });
        }

        res.status(204).json({ message: "Producto eliminado con éxito" }); // Responde con un estado 204 
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el producto", error });
    }
};
