/*  Ejercicio 6 : HTML + CSS + DOM.
 */

const productos = [
    { nombre: 'Aqua', precio: 200 },
    { nombre: 'Emoción', precio: 180 },
    { nombre: 'Alegría', precio: 160 },
    { nombre: 'Frescura', precio: 150 }
  ];
  
  const vendedores = [
    { nombre: 'Juana', ventas: [0, 0, 0, 0], total: 0 },
    { nombre: 'Pedro', ventas: [0, 0, 0, 0], total: 0 }
  ];
  
  function realizarVenta(vendedorIndex, productoIndex, cantidad) {
    if (isNaN(cantidad)) {
      console.log('Error: La cantidad debe ser un valor numérico.');
      return;
    }
  
    cantidad = parseInt(cantidad);
  
    if (cantidad <= 0) {
      console.log('Error: La cantidad debe ser mayor a cero.');
      return;
    }
  
    if (productoIndex < 0 || productoIndex >= productos.length) {
      console.log('Error: Índice de producto inválido.');
      return;
    }
  
    if (vendedorIndex < 0 || vendedorIndex >= vendedores.length) {
      console.log('Error: Índice de vendedor inválido.');
      return;
    }
  
    const producto = productos[productoIndex];
    const vendedor = vendedores[vendedorIndex];
  
    vendedor.ventas[productoIndex] += cantidad;
    vendedor.total += producto.precio * cantidad;
  
    console.log(`Venta realizada: ${vendedor.nombre} vendió ${cantidad} unidades de ${producto.nombre}`);
  }
  
  function obtenerEmpleadoDelMes() {
    let maxTotal = 0;
    let empleadoDelMes = '';
  
    for (let i = 0; i < vendedores.length; i++) {
      const vendedor = vendedores[i];
  
      if (vendedor.total > maxTotal) {
        maxTotal = vendedor.total;
        empleadoDelMes = vendedor.nombre;
      } else if (vendedor.total === maxTotal) {
        empleadoDelMes = 'Empate';
      }
    }
  
    console.log(`Empleado del mes: ${empleadoDelMes}`);
  }
  
  // Ejemplo de uso
  realizarVenta(0, 1, 3); // Juana vende 3 unidades de Emoción
  realizarVenta(1, 0, 2); // Pedro vende 2 unidades de Aqua
  realizarVenta(0, 3, 5); // Juana vende 5 unidades de Frescura
  
  obtenerEmpleadoDelMes();