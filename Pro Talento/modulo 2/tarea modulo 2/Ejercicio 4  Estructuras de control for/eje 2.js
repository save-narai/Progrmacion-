//Crea un programa que pregunte al usuario un número. 
//Usando el archivo de arreglo de Pokémons, mostrar solo los nombres 
//de los Pokémons cuyos números que son 
//múltiplos de 5 desde 1 hasta el número introducido por el usuario.

const fetch = require('node-fetch');

function mostrarPokemonsMultiplos(numero) {
  fetch('https://pastebin.com/raw/Zzk8g7Z6')
    .then(response => response.text())
    .then(data => {
      const pokemons = JSON.parse(data);
      
      for (let i = 1; i <= numero; i++) {
        if (i % 5 === 0 && pokemons.hasOwnProperty(i)) {
          console.log(pokemons[i].name);
        }
      }
    })
    .catch(error => console.log(error));
}

const numeroUsuario = parseInt(prompt("Introduce un número:"));
mostrarPokemonsMultiplos(numeroUsuario);
