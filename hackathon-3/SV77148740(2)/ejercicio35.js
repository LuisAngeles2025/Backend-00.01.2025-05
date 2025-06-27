//35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, 
// se debe ingresar sólo veinte números.

let numeros = [];

for (let i = 0; i <= 20; i++) {
    let num = parseInt(prompt("Ingresa un número:"));
    numeros.push(num);
}

let mayor = Math.max(...numeros);
console.log("El mayor es: ", mayor);

let menor = Math.min(...numeros);
console.log("El menor es: ", menor);