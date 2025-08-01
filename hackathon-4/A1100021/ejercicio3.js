// 3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855

// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

const sumOfCubes = (...rest) => rest.reduce((sum, num) => sum + Math.pow(num, 3), 0);

console.log(sumOfCubes(1, 5, 9));