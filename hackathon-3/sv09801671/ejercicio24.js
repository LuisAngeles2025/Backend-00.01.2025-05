 //Hacer un algoritmo en JavaScript para realizar 
 // la suma de todos los números pares hasta el 1000.

 let n=parseInt(prompt("ingrese el numero 1000"))

 let suma=0;
 for (i=2; i<=n+1; i+=2){
    suma+=i
 }
 alert(`La suma de todos los numeros pares menores a 1,000 es ${suma}`);
console.log(`${suma} Es la suma de los pares menores a 1000`);

