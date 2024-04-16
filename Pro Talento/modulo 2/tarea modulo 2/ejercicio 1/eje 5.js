/*5. Solicitar al usuario que ingrese dos números y 
mostrar cuál de los dos es menor. 
No considerar el caso en que ambos números son iguales*/

var numero1 = parseFloat(prompt("Ingrese el primer número"));
var numero2 = parseFloat(prompt("Ingrese el segundo número"));

if (numero1 < numero2) {
  console.log(numero1 + " es menor que " + numero2);
} else if (numero2 < numero1) {
  console.log(numero2 + " es menor que " + numero1);
} else {
  console.log("Los números son iguales");
}
    
