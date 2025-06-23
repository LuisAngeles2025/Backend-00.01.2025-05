//Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.

function crearNumeroTelefono(numeros) {
    if (numeros.length !== 10) {
        return "El arreglo debe tener exactamente 10 números";
    }

    return `(${numeros[0]}${numeros[1]}${numeros[2]}) ${numeros[3]}${numeros[4]}${numeros[5]}-${numeros[6]}${numeros[7]}${numeros[8]}${numeros[9]}`;
}

const numeros = [4, 2, 8, 1, 9, 3, 2, 3, 9, 0];
console.log(crearNumeroTelefono(numeros)); 