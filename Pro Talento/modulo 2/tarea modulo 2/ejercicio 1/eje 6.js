/*6. Solicitar al usuario que ingrese tres 
números y mostrar cuál de los tres es el número mayor. 
Considerar el caso en que 2 números sean iguales.*/


var numero1 = parseFloat(prompt("Ingrese el primer número"));
var numero2 = parseFloat(prompt("Ingrese el segundo número"));
var numero3 = parseFloat(prompt("Ingrese el tercer número"));

if (numero1 > numero2 && numero1 > numero3) {
  console.log(numero1 + " es el número mayor");
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log(numero2 + " es el número mayor");
} else if (numero3 > numero1 && numero3 > numero2) {
  console.log(numero3 + " es el número mayor");
} else {
  console.log("Hay al menos dos números iguales");
}