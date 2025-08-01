//Cree una función que tome números y devuelva la suma de sus cubos.

function sumaCubos(numeros) {
    let suma = 0
    for (let num of numeros) {
        suma += Math.pow(num, 3)
    }
    return suma
}

console.log(sumaCubos([4,8,2]));