// Controlador para calcular subtotal, IVA y total de un ticket y actualizar existencias de artículos
exports.calcularTotal = async (req, res) => {
    try {
      const ticketId = req.params.id;
      const ticket = await Ticket.findById(ticketId);
  
      if (!ticket) {
        return res.status(404).json({ message: 'Ticket no encontrado' });
      }
  
      let subtotal = 0;
      const articulosToUpdate = {}; // Almacena los artículos que necesitan actualización de existencias
  
      for (const articuloId of ticket.articulos) {
        const articulo = await Articulo.findById(articuloId);
        if (articulo) {
          subtotal += articulo.precio;
  
          // Verifica si hay suficientes existencias
          if (articulo.existencias <= 0) {
            return res.status(400).json({ message: 'Existencias insuficientes para un artículo' });
          }
  
          // Actualiza las existencias y agrega el artículo a la lista de actualización
          articulo.existencias -= 1;
          articulosToUpdate[articuloId] = articulo;
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
  
      // Actualiza las existencias de los artículos en la base de datos
      for (const articuloId in articulosToUpdate) {
        await articulosToUpdate[articuloId].save();
      }
  
      return res.json({ subtotal, iva, total });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  