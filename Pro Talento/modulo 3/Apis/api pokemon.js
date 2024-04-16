/* 7.- Traer los primeros 151 pokemon 
de la primera generacion y devolver un 
arreglo de objetos con el nombre, sus moves, 
tipos, tamaño y peso.
 */


const axios = require('axios');

async function getFirst151Pokemon() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    const pokemonList = response.data.results;

    const pokemonDataArray = [];

    for (let i = 0; i < pokemonList.length; i++) {
      const pokemonUrl = pokemonList[i].url;
      const pokemonResponse = await axios.get(pokemonUrl);
      const pokemonData = pokemonResponse.data;

      const pokemon = {
        name: pokemonData.name,
        moves: pokemonData.moves.map(move => move.move.name),
        types: pokemonData.types.map(type => type.type.name),
        height: pokemonData.height,
        weight: pokemonData.weight
      };

      pokemonDataArray.push(pokemon);
    }

    console.log(pokemonDataArray);
  } catch (error) {
    console.log('Error:', error);
  }
}

getFirst151Pokemon();