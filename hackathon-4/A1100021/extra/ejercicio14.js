// 14) Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.

// squaresSum(3) ➞ 14

// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14

const squaresSum = (n) => {
    let cuadrados = 0;
    for (let i = 1; i <= n; i++) {
        cuadrados += Math.pow(i, 2);
    }
    return cuadrados;
};

console.log(squaresSum(3));