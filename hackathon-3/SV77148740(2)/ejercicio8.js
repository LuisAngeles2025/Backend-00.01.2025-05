//8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el 
// estudiante aprobó o no.

var nota1 = parseFloat(prompt("Coloque primera nota: "));
var nota2 = parseFloat(prompt("Coloque segunda nota: "));
var nota3 = parseFloat(prompt("Coloque tercera nota: "));

promedio=(nota1+nota2+nota3)/3;

if (promedio>10){
    console.log("El estudiante aprobo ");
} else{
    console.log("El estudiante no aprobo");
}