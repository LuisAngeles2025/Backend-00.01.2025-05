//Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.


function mayoresPorGrupo(matriz) {
    return matriz.map(grupo => Math.max(...grupo));
}

const matriz = [
    [1, 5, 3],
    [10, 2, 8],
    [7, 7, 9],
    [4, 6, 0]
];

const resultado = mayoresPorGrupo(matriz);
console.log(resultado);