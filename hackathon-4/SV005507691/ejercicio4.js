//Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)


function sumarNumeros (... numeros) {
    let suma = 0
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]
    }

    return suma
}

console.log(sumarNumeros(2,5));