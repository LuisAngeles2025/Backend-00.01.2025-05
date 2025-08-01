// 10) Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.

// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

const toArray = obj => Object.entries(obj);

console.log(toArray({ a: 1, b: 2 }));