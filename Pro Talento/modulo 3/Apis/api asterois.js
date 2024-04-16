/*  6.- (EXTRA) Devolver los asteroides 
que sean potencialmente peligrosos para la 
tierra de la semana pasada hasta el día de
 ayer.
 */



const axios = require('axios');

function getPotentiallyHazardousAsteroids() {
  const today = new Date();
  const endDate = today.toISOString().slice(0, 10);
  const startDate = new Date(today.setDate(today.getDate() - 7)).toISOString().slice(0, 10);

  axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`)
    .then(response => {
      const asteroidData = response.data;
      const hazardousAsteroids = asteroidData.near_earth_objects;

      console.log('Asteroides potencialmente peligrosos para la Tierra:');
      for (let date in hazardousAsteroids) {
        console.log(`Fecha: ${date}`);
        console.log('Asteroides:');
        for (let i = 0; i < hazardousAsteroids[date].length; i++) {
          console.log(hazardousAsteroids[date][i].name);
        }
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

getPotentiallyHazardousAsteroids();