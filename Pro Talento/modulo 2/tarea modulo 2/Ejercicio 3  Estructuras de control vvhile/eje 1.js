//1. Crea un programa que pregunte al usuario un número. 
//Mostrar los números que son múltiplos 
//de 5 desde 1 hasta el número introducido por el usuario.

const numeroUsuario = parseInt(prompt("Introduce un número:"));

for (let i = 1; i <= numeroUsuario; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

