

/*9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.*/

var topping = prompt("Ingrese el topping que desea (oreo, KitKat, brownie)");

var precioHelado = 50;

switch (topping.toLowerCase()) {
  case "oreo":
    precioHelado += 10;
    break;
  case "kitkat":
    precioHelado += 15;
    break;
  case "brownie":
    precioHelado += 20;
    break;
  default:
    console.log("No tenemos este topping, lo sentimos.");
    console.log("El precio del helado sin topping es de " + precioHelado + " MXN");
    break;
}

if (topping.toLowerCase() !== "oreo" && topping.toLowerCase() !== "kitkat" && topping.toLowerCase() !== "brownie") {
  console.log("El precio del helado sin topping es de " + precioHelado + " MXN");
} else {
  console.log("El precio del helado con " + topping + " es de " + precioHelado + " MXN");
}

