const Articulo = require('../models/articulo');

// Controlador para obtener todos los artículos
exports.getAllArticulos = (req, res) => {
  Articulo.find({}, (err, articulos) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(articulos);
    }
  });
};

// Controlador para crear un nuevo artículo
exports.createArticulo = (req, res) => {
  const nuevoArticulo = new Articulo(req.body);
  nuevoArticulo.save((err, articulo) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json(articulo);
    }
  });
};

// Controlador para obtener un artículo por su ID
exports.getArticuloById = (req, res) => {
  Articulo.findById(req.params.id, (err, articulo) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!articulo) {
      res.status(404).json({ message: 'Artículo no encontrado' });
    } else {
      res.json(articulo);
    }
  });
};

// Controlador para actualizar un artículo por su ID
exports.updateArticulo = (req, res) => {
  Articulo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, articulo) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (!articulo) {
        res.status(404).json({ message: 'Artículo no encontrado' });
      } else {
        res.json(articulo);
      }
    }
  );
};

// Controlador para eliminar un artículo por su ID
exports.deleteArticulo = (req, res) => {
  Articulo.findByIdAndRemove(req.params.id, (err, articulo) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!articulo) {
      res.status(404).json({ message: 'Artículo no encontrado' });
    } else {
      res.json({ message: 'Artículo eliminado con éxito' });
    }
  });
};
