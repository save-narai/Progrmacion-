/* 2.- Escribe una función que al 
ejecutarse realice una petición a la API 
 Open Library. Buscar un libro y traer el o
  los autores del primer libro
 */


  const axios = require('axios');

function getAuthorsFromOpenLibrary() {
  const searchTerm = 'harry potter'; // Reemplaza con el término de búsqueda que desees

  axios.get(`http://openlibrary.org/search.json?q=${searchTerm}`)
    .then(response => {
      const firstBook = response.data.docs[0];
      const authors = firstBook.author_name;

      console.log('Autores del primer libro:');
      for (let i = 0; i < authors.length; i++) {
        console.log(authors[i]);
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

getAuthorsFromOpenLibrary();