// 6) Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.

// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

const minMax = datos => [Math.min(...datos), Math.max(...datos)];

console.log(minMax([1, 2, 3, 4, 5]));