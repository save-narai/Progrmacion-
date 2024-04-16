/*  Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.
*/


var tipoVehiculo = prompt("Ingrese el tipo de vehículo (coche, moto, autobús)");
var kmsRecorridos = parseInt(prompt("Ingrese la cantidad de kilómetros recorridos"));
var litrosConsumidos = parseInt(prompt("Ingrese la cantidad de litros consumidos"));

var precioKm;
var extraLitros;
var totalPagar;

if (tipoVehiculo.toLowerCase() === "coche") {
  precioKm = 0.20;
} else if (tipoVehiculo.toLowerCase() === "moto") {
  precioKm = 0.10;
} else if (tipoVehiculo.toLowerCase() === "autobús") {
  precioKm = 0.5;
} else {
  console.log("El tipo de vehículo ingresado no es válido");
}

if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
  extraLitros = 5;
} else if (litrosConsumidos > 100) {
  extraLitros = 10;
} else {
  console.log("La cantidad de litros consumidos ingresada no es válida");
}

if (precioKm && extraLitros) {
  totalPagar = (precioKm * kmsRecorridos) + extraLitros;
  console.log("El total a pagar es de " + totalPagar);
}