// 18) Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.

// filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

const filterList = datos => datos.filter(valor => typeof valor !== "string");

console.log(filterList([1, 2, 3, "x", "y", 10]));