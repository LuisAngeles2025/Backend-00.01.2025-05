//Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.

function obtenerNombres(estudiantes) {
    return estudiantes.map(est => est.nombre);
}

const estudiantes = [
    { nombre: "Luis", edad: 24 },
    { nombre: "Ana", edad: 22 },
    { nombre: "Pedro", edad: 25 }
];

const nombres = obtenerNombres(estudiantes);
console.log(nombres);