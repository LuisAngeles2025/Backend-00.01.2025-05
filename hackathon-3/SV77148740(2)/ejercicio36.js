// 36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.

let num= parseInt(prompt("Coloque términos de Fibonacci que deseas ver: "));

let x = 0, y = 1;

console.log("Serie de Fibonacci:");

for (let i = 0; i < num; i++) {
    console.log(x);
    let siguiente = x + y;
    x = y;
    y = siguiente;
}