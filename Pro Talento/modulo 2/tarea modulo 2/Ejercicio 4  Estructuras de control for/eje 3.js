//3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] 
//y muestre en consola solo los elementos que son tipo número.

const arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

for (let i = 0; i < arreglo.length; i++) {
  if (typeof arreglo[i] === "number") {
    console.log(arreglo[i]);
  }
}