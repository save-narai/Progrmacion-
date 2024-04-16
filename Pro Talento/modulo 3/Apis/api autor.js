/*  3.- Hacer una petición por autor y 
devolver la lista de sus libros.
 */


const axios = require('axios');

function getBooksByAuthor(authorName) {
  axios.get(`http://openlibrary.org/search.json?author=${authorName}`)
    .then(response => {
      const books = response.data.docs;

      console.log(`Libros del autor ${authorName}:`);
      for (let i = 0; i < books.length; i++) {
        console.log(books[i].title);
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

getBooksByAuthor('J.K. Rowling'); // Reemplaza con el autor que desees buscar