//Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.


function repetirElemento(elemento, veces) {
    let resultado = [];

    for (let i = 0; i < veces; i++) {
        resultado.push(elemento);
    }

    return resultado;
}

console.log(repetirElemento("hola", 3));
console.log(repetirElemento(7, 5));
console.log(repetirElemento(true, 2));