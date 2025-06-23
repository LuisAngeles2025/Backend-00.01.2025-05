//Hacer un algoritmo en JavaScript que lea dos 
//números y diga cuál es el mayor.

const x=parseFloat(prompt("ingrese el primer numero"));
const y=parseFloat(prompt("ingrese el segundo numero"));

let mayor
if (x>=y){
    mayor=x
}else{
    mayor=y
}

alert("el numero mayor es "+ mayor)
console.log(mayor+ "es el mayor numero")