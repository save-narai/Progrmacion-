const express = require('express');
const router = express.Router();
const articuloController = require('../controllers/articuloController');

// Definir rutas CRUD para Artículos
router.get('/', articuloController.getAllArticulos);
router.post('/', articuloController.createArticulo);
router.get('/:id', articuloController.getArticuloById);
router.put('/:id', articuloController.updateArticulo);
router.delete('/:id', articuloController.deleteArticulo);

module.exports = router;
