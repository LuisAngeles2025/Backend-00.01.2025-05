//Hacer un algoritmo en JavaScript que permita calcular el 
//factorial de un número.

let x=parseInt(prompt("Ingrese un numero"))

let fact=1; 

for (let i=1; i<=x; i++){
    
    fact=fact*i  
}
alert("el factorial del numero "+x+" es "+fact)
console.log(fact+" es el factorial del numero "+x)