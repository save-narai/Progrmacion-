/*7. Requerir al usuario que ingrese un día de la semana e 
imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, 
otro mensaje diferente si es sábado o domingo. 
Si el día ingresado no es ninguno de esos, imprimir otro mensaje.*/


var diaSemana = prompt("Ingrese un día de la semana");

switch (diaSemana.toLowerCase()) {
  case "lunes":
    console.log("Hoy es lunes");
    break;
  case "viernes":
    console.log("Hoy es viernes");
    break;
  case "sábado":
  case "domingo":
    console.log("Hoy es fin de semana");
    break;
  default:
    console.log("El día ingresado no es válido");
    break;
}


    
