/*3. Crear un programa que determine si un 
número introducido en un Prompt es par o 
no, la respuesta será mostrada en un Alert.
 */


var numero = parseInt(prompt("Ingrese un número"));

if (numero % 2 === 0) {
  alert(numero + " es un número par");
} else {
  alert(numero + " no es un número par");
}
