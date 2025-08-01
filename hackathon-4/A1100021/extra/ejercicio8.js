// 8) Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.

// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

const findLargestNums = (arrNumeros) => {
    let arrMayores = [];
    for (let i = 0; i < arrNumeros.length; i++) {
        arrMayores.push(Math.max(...arrNumeros[i])); 
    }
    return arrMayores;
};

console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));