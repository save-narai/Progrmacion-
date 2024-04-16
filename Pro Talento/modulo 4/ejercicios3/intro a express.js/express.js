
/* Agrega un endpoint '/api/' que 
responda a una petición de tipo GET 
con un código de estado 200 y el siguiente 
json: { 'mensaje':'hola mundo' } */

const express = require('express');
const app = express();

app.get('/api/', (req, res) => {
  const mensaje = { mensaje: 'hola mundo' };
  res.status(200).json(mensaje);
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});




/* Agrega un endpoint '/api/suma' que
 responda a una petición de tipo GET con 
 la suma de dos números que reciba mediante
  las querys num1 y num2. El servidor debe 
  responder con un código de estado 200 y un 
  json como el siguiente: { 'resultado': 7 }
  */



const express = require('express');
const app = express();

app.get('/api/suma', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  
  const resultado = num1 + num2;
  
  res.status(200).json({ resultado });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});


/* Agrega un endpoint '/api/usuario/' 
que responda a una petición de tipo GET con 
el nombre que sea recibido a través de params. El servidor debe responder con un código de estado 200 y 
un json como este: { 'usuario': 'Edwin' } */


const express = require('express');
const app = express();

app.get('/api/usuario/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  
  res.status(200).json({ usuario: nombre });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});


/* Agrega un endpoint '/api/swapi' que 
responda a una petición de tipo GET con 
el personaje solicitado d
e https://swapi.dev/. El cliente debe
 mandar el número de personaje mediante params. La respuesta del servidor debe lucir algo así { 'personaje': { 'name': 'Luke Skywalker', ..., } }
 */

 javascript
const axios = require('axios');
const express = require('express');
const app = express();

app.get('/api/swapi/:personaje', async (req, res) => {
  const personajeId = req.params.personaje;
  const url = `https://swapi.dev/api/people/${personajeId}`;

  try {
    const response = await axios.get(url);
    const personaje = response.data;

    res.status(200).json({ personaje });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el personaje' });
  }
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});


/*  Agrega un endpoint '/api/body que 
responda a una petición de tipo PUT con 
el body que el cliente envíe al hacer la 
petición. Ejemplo: cliente envía un body 
desde postman o insomnia que luce como este:
 { “nombre”: “Maui”, “ocupacion”: “Sensei” }
  Entonces, el servidor debe responder con 
  un objeto idéntico al que envía el cliente, 
  junto con un status de respuesta 200.
 */

  const express = require('express');
const app = express();

app.use(express.json());

app.put('/api/body', (req, res) => {
  const body = req.body;

  res.status(200).json(body);
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});


/*  Vuelve a hacer el ejercicio 2 pero 
enviando num1 y num2 desde el body, a través 
de una petición POST que responda con el 
status 200
  */


const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/suma', (req, res) => {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);

  const resultado = num1 + num2;

  res.status(200).json({ resultado });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});



/* Crea un endpoint para una petición de 
tipo DELETE donde envíes un ID (un número 
    cualquiera) a través de params. Si el
     param contiene el ID 3, entonces 
     responde con un status 200 y el mensaje 
     “se ha eliminado el objeto con ID 3”, de 
     lo contrario, si envían cualquier otro 
     número como ID, responde con un status 
     404 y el mensaje “No se encontró el 
     bjeto con el ID especificado”.
  */



 const express = require('express');
const app = express();

app.delete('/api/objeto/:id', (req, res) => {
  const id = req.params.id;

  if (id === '3') {
    res.status(200).json({ message: `Se ha eliminado el objeto con ID ${id}` });
  } else {
    res.status(404).json({ message: `No se encontró el objeto con el ID especificado` });
  }
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

