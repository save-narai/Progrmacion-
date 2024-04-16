

/* Ejercicio 1: Muestra un mensaje en consola
mediante un callback. La función que escribas 
debe poder mostrar el mensaje como console.warn, 
console.log, 
console.info, o cualquier método para pintar en consola del objeto console.  */


function showMessage(message, callback) {
    callback(message);
  }
  
  function logMessage(message) {
    console.log(message);
  }
  
  function warnMessage(message) {
    console.warn(message);
  }
  
  function infoMessage(message) {
    console.info(message);
  }
  
  showMessage("Hola mundo!", logMessage);
  showMessage("Cuidado!", warnMessage);
  showMessage("Información importante", infoMessage);



//2.- Crear una función que reciba como 
 // argumento una variable de cualquier tipo 
//un callback. La función debe retornar como 
// mediante el callback, cual es el tipo de dato de la 
//variable ingresada e imprimir su contenido.

function checkDataType(variable, callback) {
    const dataType = typeof variable;
    callback(dataType, variable);
  }
  
  function printDataType(dataType, variable) {
    console.log(`El tipo de dato de la variable es ${dataType}`);
    console.log(`El contenido de la variable es ${variable}`);
  }
  
  checkDataType("Hola mundo!", printDataType);
  checkDataType(42, printDataType);
  checkDataType(true, printDataType);


  /*  3.- Crear una función que reciba como 
  Según el callback que se pase a la función, 
  argumentos, dos números y un callback. 
   devuelve la suma de los dos números, 
   la resta de los dos números, 
   la multiplicación de los dos números o
    división.
 */

    function performOperation(num1, num2, callback) {
        return callback(num1, num2);
      }
      
      function sum(a, b) {
        return a + b;
      }
      
      function subtract(a, b) {
        return a - b;
      }
      
      function multiply(a, b) {
        return a * b;
      }
      
      function divide(a, b) {
        if (b === 0) {
          return "Error: Division by zero";
        }
        return a / b;
      }
      
      console.log(performOperation(5, 3, sum)); // Output: 8
      console.log(performOperation(5, 3, subtract)); // Output: 2
      console.log(performOperation(5, 3, multiply)); // Output: 15
      console.log(performOperation(5, 3, divide)); // Output: 1.6666666666666667

      /* 
      
4.- Escribe una función que reciba una 
 de caracteres y debe devolver, 
 un callback, la cadena de caracteres en 
 mayúsculas o en minúsculas.
ordenSuperior("PejeLagarto", minus); -> 
pejelagarto ordenSuperior("PejeLagarto", mayus); -> PEJELAGARTO*/


function convertCase(str, callback) {
  return callback(str);
}

function toLowerCase(str) {
  return str.toLowerCase();
}

function toUpperCase(str) {
  return str.toUpperCase();
}

console.log(convertCase("PejeLagarto", toLowerCase)); // Output: pejelagarto
console.log(convertCase("PejeLagarto", toUpperCase)); // Output: PEJELAGARTO


/*    */


function filterByHours(arr, callback) {
  const filteredArr = arr.filter(time => time > 120);
  callback(filteredArr);
}

function printArray(arr) {
  console.log(arr);
}

const times = [120, 80, 200, 100];
filterByHours(times, printArray); // Output: [200]