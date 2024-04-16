/*5.- Hacer una petición a la swapi para 
obtener un personaje y también obtener las 
películas donde aparece.
  */

const axios = require('axios');

function getCharacterInfo(characterName) {
  axios.get(`https://swapi.co/api/people/?search=${characterName}`)
    .then(response => {
      const character = response.data.results[0];
      const films = character.films;

      console.log(`Información del personaje ${characterName}:`);
      console.log(`Nombre: ${character.name}`);
      console.log('Películas en las que aparece:');
      for (let i = 0; i < films.length; i++) {
        axios.get(films[i])
          .then(response => {
            const film = response.data;
            console.log(film.title);
          })
          .catch(error => {
            console.log('Error:', error);
          });
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

getCharacterInfo('Luke Skywalker'); // Reemplaza con el nombre del personaje que desees buscar