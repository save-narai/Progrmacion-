// models/ticket.js
const mongoose = require('mongoose');
const Articulo = require('./articulo'); // Importa el modelo de Artículo

const ticketSchema = new mongoose.Schema({
  subtotal: { type: Number, required: true },
  iva: { type: Number, required: true },
  total: { type: Number, required: true },
  articulos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Articulo' }],
  usuario: { type: String, required: true }, // Aquí puedes especificar el modelo de usuario si es necesario
});

module.exports = mongoose.model('Ticket', ticketSchema);
