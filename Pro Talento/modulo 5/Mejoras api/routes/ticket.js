const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

// Ruta para calcular subtotal, IVA y total de un ticket
router.post('/:id/calcular-total', ticketController.calcularTotal);

// Resto de las rutas CRUD para Tickets

module.exports = router;
