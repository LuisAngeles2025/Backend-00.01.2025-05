//Hacer un algoritmo en JavaScript para ayudar a un trabajador 
//a saber cuál será su sueldo semanal, se sabe que si trabaja 
//40 horas o menos, se le pagará $20 por hora, pero si trabaja 
//más de 40 horas entonces las horas extras se le pagarán a $25
//por hora.

let horasLaboradas=parseFloat(prompt("ingrese la cantidad de horas laboradas"))

if (horasLaboradas<=40){
    hx = horasLaboradas*20;
}else{
    hx = horasLaboradas*25;
}

alert("El sueldo semanal sera de "+ hx)
console.log("El sueldo semanal sera de "+ hx)    