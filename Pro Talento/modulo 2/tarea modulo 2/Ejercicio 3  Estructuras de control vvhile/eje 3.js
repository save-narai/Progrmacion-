/*3. Crea un programa que solicite al usuario números, 
si lo que este introduce es un número guardarlo en un arreglo. 
Para terminar el capturar el usuario debe ingresar el número 0. 
Finalmente mostrar 
la lista de números capturados en pantalla o en la consola*/

const numeros = [];
let numero;

do {
  numero = parseInt(prompt("Introduce un número (0 para terminar):"));
  if (numero !== 0 && !isNaN(numero)) {
    numeros.push(numero);
  }
} while (numero !== 0);

console.log(numeros);