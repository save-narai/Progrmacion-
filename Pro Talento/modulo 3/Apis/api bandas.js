/*  4.- Hacer una petición y devolver el 
 de la banda deseada.
*/

const axios = require('axios');

function getBandGenre(bandName) {
  axios.get(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${bandName}`)
    .then(response => {
      const band = response.data.artists[0];
      const genre = band.strGenre;

      console.log(`El género de ${bandName} es: ${genre}`);
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

getBandGenre('coldplay'); // Reemplaza con el nombre de la banda que desees buscar