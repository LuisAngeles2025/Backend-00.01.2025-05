// 21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
let x = parseInt(prompt("Colocar factorial"));
let factorial=1;

for(let i=1;i<=x;i++){
    factorial=factorial*i;
}

console.log("El factorial es: "+factorial);