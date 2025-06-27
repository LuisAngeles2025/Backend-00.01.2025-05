//Hacer un algoritmo en JavaScript para calcular el 
//promedio de tres notas y determinar si el estudiante aprobó o no.

const nota1 = parseFloat(prompt("Ingrese la primera nota"))
const nota2 = parseFloat(prompt("ingrese la segunda nota"))
const nota3 = parseFloat(prompt("Ingrese la tercera nota"))

if ((nota1 + nota2 + nota3)/3 >= 12.50){
    console.log ("aprobado")
    alert("El alumno aprobo el curso")
}else{
    console.log ("Desaprobado")
    alert("El alumno debe esforzarse mas")
}


