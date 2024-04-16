/*    1.- Hacer una petición a la 
PokeAPI para obtener cualquier Pokémon. 
Muestra sus tipos en consola mediante un for.
  */




fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => response.json())
  .then(data => {
    console.log('Tipos del Pokémon:');
    for (let i = 0; i < data.types.length; i++) {
      console.log(data.types[i].type.name);
    }
  })
  .catch(error => console.log('Error:', error));