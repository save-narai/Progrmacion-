/*1. Crear un array vacío, luego generar
 10 números al azar y guardarlos en un array. 
 Mostrar en consola el resultado del array.
2. El usuario deberá ingresar un string 
con varias palabras separadas por coma en un popup y 
se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.
3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: 
El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor.
 Tip: Busca en google los métodos 
de JavaScript que regresan el mayor y menor elemento de un arreglo.*/


var numeros = [];
for (var i = 0; i < 10; i++) {
  var numero = Math.floor(Math.random() * 100) + 1; // Generar número al azar entre 1 y 100
  numeros.push(numero); // Agregar número al array
}
console.log(numeros); // Mostrar array en consola


var palabras = prompt("Ingrese varias palabras separadas por coma").split(",");
console.log(palabras); // Mostrar array en consola

var numeros = [10, 40, 30, 20, 15, 5];
numeros.sort(function(a, b) {
  return a - b;
});
var menor = Math.min(...numeros);
var mayor = Math.max(...numeros);
console.log(numeros); // Mostrar array ordenado en consola
console.log("El número menor es: " + menor);
console.log("El número mayor es: " + mayor);