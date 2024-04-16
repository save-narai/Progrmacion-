const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const articuloRoutes = require('./routes/articulo');
const ticketRoutes = require('./routes/ticket');

app.use(bodyParser.json());

// Rutas para Artículos
app.use('/api/articulos', articuloRoutes);

// Rutas para Tickets
app.use('/api/tickets', ticketRoutes);

// Iniciar servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
