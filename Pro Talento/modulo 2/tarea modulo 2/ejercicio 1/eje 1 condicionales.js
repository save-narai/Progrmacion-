//1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, 
// en caso de contestar no, responder: “No te creo”.


var respuesta = prompt("¿Eres bellisimo/a?");

if (respuesta.toLowerCase() === "sí") {
  console.log("Ciertamente");
} else if (respuesta.toLowerCase() === "no") {
  console.log("No te creo");
} else {
  console.log("Respuesta inválida");
}