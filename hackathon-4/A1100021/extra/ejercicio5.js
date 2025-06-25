// 5) Crear una función que reciba un array de valores y filtre los valores que no son string

const filtrar = (datos) => datos.filter(valor => typeof valor !== "string");

console.log(filtrar([32, "Manzana", 4, 5, 6, 4, "Banana", 6, 3, 23]));

