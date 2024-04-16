calcularTotal

const Ticket = require('../models/ticket');
const Articulo = require('../models/articulo');

// ... Resto de las funciones del controlador

// Controlador para calcular subtotal, IVA y total de un ticket
exports.calcularTotal = async (req, res) => {
  try {
    const ticketId = req.params.id;
    const ticket = await Ticket.findById(ticketId);

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket no encontrado' });
    }

    let subtotal = 0;
    for (const articuloId of ticket.articulos) {
      const articulo = await Articulo.findById(articuloId);
      if (articulo) {
        subtotal += articulo.precio;
      }
    }

    const iva = subtotal * 0.16; // Suponiendo un IVA del 16%
    const total = subtotal + iva;

    // Actualiza los valores en el ticket
    ticket.subtotal = subtotal;
    ticket.iva = iva;
    ticket.total = total;

    // Guarda el ticket actualizado en la base de datos
    await ticket.save();

    return res.json({ subtotal, iva, total });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
