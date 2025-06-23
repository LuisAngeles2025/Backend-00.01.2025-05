//Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.

function cuentaRegresiva(n) {
    let resultado = [];

    for (let i = n; i >= 0; i--) {
        resultado.push(i);
    }

    return resultado;
}

console.log(cuentaRegresiva(5));
console.log(cuentaRegresiva(0));