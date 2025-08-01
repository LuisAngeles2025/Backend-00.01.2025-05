//Crear una función que reciba un array de valores y filtre los valores que no son string

function filtrarStrings (array) {
    return array.filter(valor => typeof valor === "string");
}

const valores = [4, "Hola", true, "Luis", "Prueba"];
const soloStrings = filtrarStrings(valores);

console.log(soloStrings);
