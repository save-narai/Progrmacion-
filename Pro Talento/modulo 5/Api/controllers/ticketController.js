const Ticket = require('../models/ticket');

// Controlador para obtener todos los tickets
exports.getAllTickets = (req, res) => {
  Ticket.find({}, (err, tickets) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(tickets);
    }
  });
};

// Controlador para crear un nuevo ticket
exports.createTicket = (req, res) => {
  const nuevoTicket = new Ticket(req.body);
  nuevoTicket.save((err, ticket) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json(ticket);
    }
  });
};

// Controlador para obtener un ticket por su ID
exports.getTicketById = (req, res) => {
  Ticket.findById(req.params.id, (err, ticket) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!ticket) {
      res.status(404).json({ message: 'Ticket no encontrado' });
    } else {
      res.json(ticket);
    }
  });
};

// Controlador para actualizar un ticket por su ID
exports.updateTicket = (req, res) => {
  Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, ticket) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (!ticket) {
        res.status(404).json({ message: 'Ticket no encontrado' });
      } else {
        res.json(ticket);
      }
    }
  );
};

// Controlador para eliminar un ticket por su ID
exports.deleteTicket = (req, res) => {
  Ticket.findByIdAndRemove(req.params.id, (err, ticket) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!ticket) {
      res.status(404).json({ message: 'Ticket no encontrado' });
    } else {
      res.json({ message: 'Ticket eliminado con éxito' });
    }
  });
};
