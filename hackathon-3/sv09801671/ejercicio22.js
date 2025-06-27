//Hacer un algoritmo en JavaScript para calcular la 
// suma de los n primeros números.

let n=parseInt(prompt("ingrese un numero"));

let x=0
for (i=1; i<=n; i++){
    x=x+i
}
alert("La suma de los n primeros numeros es de "+x);
console.log(x+" es la suma de los n primeros numeros")