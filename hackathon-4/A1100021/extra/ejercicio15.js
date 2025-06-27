// 15) Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada

// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

const multiplyByLength = (arrValores) => {
    arrValores.forEach((item, index, arr) => {
        arr[index] = item * arrValores.length;
    });
    return arrValores;
};

console.log(multiplyByLength([2, 3, 1, 0]));