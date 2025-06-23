//Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.


function filtrarEnteros(array) {
    return array.filter(valor => Number.isInteger(valor));
}

const mezcla = [1, "hola", 3.5, 2, true, "mundo", 7];

const soloEnteros = filtrarEnteros(mezcla);
console.log(soloEnteros);