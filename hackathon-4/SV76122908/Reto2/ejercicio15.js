//Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
//multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

function multiplyByLength(numeros) {
    const longitud = numeros.length;
  
    return numeros.map(num => num * longitud);
  }

console.log(multiplyByLength([2, 3, 1, 0])); 