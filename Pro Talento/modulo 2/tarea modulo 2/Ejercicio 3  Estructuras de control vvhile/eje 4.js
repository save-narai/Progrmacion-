/* 4. Crea un programa que solicite al usuario letras o 
palabras, si es así guardar el resultado. Para terminar de capturar 
el usuario no debe escribir valor alguno. Al terminar de capturar, 
mostrar en pantalla la concatenación de todas las palabras capturadas. */


const palabras = [];
let palabra;

do {
  palabra = prompt("Introduce una letra o palabra (deja vacío para terminar):");
  if (palabra !== "") {
    palabras.push(palabra);
  }
} while (palabra !== "");

const resultado = palabras.join("");
console.log(resultado);