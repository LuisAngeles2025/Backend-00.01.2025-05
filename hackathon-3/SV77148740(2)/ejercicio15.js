// 15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.

let cm = parseFloat(prompt("Colocar centrimetos para convertirlo en pulgadas: "));
let libras = parseFloat(prompt("Colocar pulgadas para convertirlo en kilogramos: "));
let pulgadas,kg;

pulgadas=cm*0.393;
kg=libras*0.4536;

console.log("La conversion de centimetros a pulgadas es: "+pulgadas);
console.log("La conversion de libras a kilogramos es: "+kg);