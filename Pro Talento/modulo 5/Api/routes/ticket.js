const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

// Definir rutas CRUD para Tickets
router.get('/', ticketController.getAllTickets);
router.post('/', ticketController.createTicket);
router.get('/:id', ticketController.getTicketById);
router.put('/:id', ticketController.updateTicket);
router.delete('/:id', ticketController.deleteTicket);

module.exports = router;
