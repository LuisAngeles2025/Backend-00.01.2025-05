//6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal,
// se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas 
 //entonces las horas extras se le pagarán a $25 por hora.

let horas=30, sueldoSemanal,horasExtras;

if(horas<40){
    sueldoSemanal=horas*20;
    console.log("El sueldo del empleado es: "+sueldoSemanal);
} else{
    horasExtras= horas-40;
    sueldoSemanal=800+(horasExtras*25)
    console.log("El sueldo del empleado es: "+sueldoSemanal);
}