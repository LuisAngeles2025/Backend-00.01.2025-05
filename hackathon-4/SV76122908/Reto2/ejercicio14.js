//Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
//squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14

function squaresSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i; // Suma el cuadrado de cada número desde 1 hasta n
    }
    return sum;
    }
// Ejemplo de uso
console.log(squaresSum(3)); 
console.log(squaresSum(4)); 
console.log(squaresSum(5)); 

