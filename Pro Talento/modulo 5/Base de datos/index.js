// Ejemplo de uso en tu aplicación
const mongoose = require('mongoose');
const db = require('./db'); // Importa la conexión a la base de datos
const Articulo = require('./models/articulo');
const Ticket = require('./models/ticket');

// Ejemplo de crear un nuevo artículo
const nuevoArticulo = new Articulo({
  nombre: 'Producto 1',
  precio: 10.99,
  existencias: 100,
});

nuevoArticulo.save((err, articuloGuardado) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Artículo guardado:', articuloGuardado);
  }
});

// Ejemplo de crear un nuevo ticket
const nuevoTicket = new Ticket({
  subtotal: 50.0,
  iva: 10.0,
  total: 60.0,
  articulos: [nuevoArticulo._id], // Asigna el ID del artículo creado anteriormente
  usuario: 'usuario123',
});

nuevoTicket.save((err, ticketGuardado) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Ticket guardado:', ticketGuardado);
  }
});
