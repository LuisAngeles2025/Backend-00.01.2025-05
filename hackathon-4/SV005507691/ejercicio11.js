//Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

function sumarPresupuestos(personas) {
    let total = 0;

    for (let i = 0; i < personas.length; i++) {
        total += personas[i].presupuesto;
    }

    return total;
}

const personas = [
    { nombre: "Luis", presupuesto: 1000 },
    { nombre: "Ana", presupuesto: 1500 },
    { nombre: "Pedro", presupuesto: 1200 }
];

console.log(sumarPresupuestos(personas));