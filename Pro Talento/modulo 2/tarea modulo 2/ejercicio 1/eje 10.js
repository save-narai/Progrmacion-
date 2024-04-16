/*10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses*/


var programa = prompt("Ingrese el programa educativo deseado (Course, Carrera, Master)");
var beca = prompt("¿Cuenta con alguna beca? (Facebook, Google, Jesua)");

var precioMensual;
var duracion;
var descuento;

switch (programa.toLowerCase()) {
  case "course":
    precioMensual = 4999;
    duracion = 2;
    break;
  case "carrera":
    precioMensual = 3999;
    duracion = 6;
    break;
  case "master":
    precioMensual = 2999;
    duracion = 12;
    break;
  default:
    console.log("El programa educativo ingresado no es válido");
    break;
}

switch (beca.toLowerCase()) {
  case "facebook":
    descuento = 0.2;
    break;
  case "google":
    descuento = 0.15;
    break;
  case "jesua":
    descuento = 0.5;
    break;
  default:
    descuento = 0;
    break;
}

if (precioMensual && descuento) {
  var precioMensualConDescuento = precioMensual - (precioMensual * descuento);
  var precioTotal = precioMensualConDescuento * duracion;

  console.log("El precio mensual con descuento es de " + precioMensualConDescuento + " MXN");
  console.log("El precio total por el curso elegido es de " + precioTotal + " MXN");
}