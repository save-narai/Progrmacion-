let dia;

do {
  dia = prompt("Introduce un día de la semana:");
  
  switch (dia.toLowerCase()) {
    case "lunes":
      alert("¡Es lunes! ¡Ánimo para empezar la semana!");
      break;
    case "martes":
      alert("¡Es martes! ¡Vamos que ya es mitad de semana!");
      break;
    case "miércoles":
      alert("¡Es miércoles! ¡Ya casi es fin de semana!");
      break;
    case "jueves":
      alert("¡Es jueves! ¡El fin de semana está cerca!");
      break;
    case "viernes":
      alert("¡Es viernes! ¡Por fin llegó el fin de semana!");
      break;
    case "sábado":
      alert("¡Es sábado! ¡Disfruta tu día libre!");
      break;
    case "domingo":
      alert("¡Ve a descansar!");
      break;
    default:
      alert("Día inválido, por favor introduce un día de la semana válido.");
      break;
  }
} while (dia.toLowerCase() !== "domingo");