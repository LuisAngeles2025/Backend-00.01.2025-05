//Cree una función que tome una matriz de matrices con números. 
//Devuelve una nueva matriz (única) con el mayor número de cada uno.
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

function findLargestNums(matriz) {
    const mayores = matriz.map(submatriz => {
      return Math.max(...submatriz); // Encontramos el mayor en cada submatriz
    });
  
    return mayores;
  }

  console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));