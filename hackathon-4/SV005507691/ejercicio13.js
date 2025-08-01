//Escriba una función que convierta un objeto en una matriz de claves y valores.


function objetoAMatriz(objeto) {
    return Object.entries(objeto);
}

const persona = {
    nombre: "Luis",
    edad: 24,
    ciudad: "Lima"
};

const resultado = objetoAMatriz(persona);
console.log(resultado);