//4. Solicitar al usuario un número de cliente. Si el número es el 1000, 
//imprimir 'Ganaste un premio', en caso contrario mostrar el 
//número y el mensaje “Lo sentimos, sigue participando”.



var numeroCliente = parseInt(prompt("Ingrese su número de cliente"));

if (numeroCliente === 1000) {
  console.log("Ganaste un premio");
} else {
  console.log("Lo sentimos, sigue participando");
}
