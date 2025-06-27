//Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.function sumaCuadrados(n) {
    let suma = 0; {

    for (let i = 1; i <= n; i++) {
        suma += i * i;
    }

    return suma;
}

console.log(sumaCuadrados(3)); 
console.log(sumaCuadrados(5));