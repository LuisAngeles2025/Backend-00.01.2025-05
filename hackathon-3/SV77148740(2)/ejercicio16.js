// 16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.

let diaDeLaSemana = parseInt(prompt("Coloque numero del dia de la semana es(1-7): "));

    switch(diaDeLaSemana){
    case 1: 
        console.log("El dia es LUNES");
        break;
    case 2:
        console.log("El dia es MARTES");
        break;
    case 3:
        console.log("El dia es MIERCOLES");
        break;
    case 4:
        console.log("El dia es JUEVES");
        break;
    case 5:
        console.log("El dia es VIERNES");
        break;
    case 6:
        console.log("El dia es SABADO");
        break;
    case 7:
        console.log("El dia es DOMINGO");
        break;
    default:
        console.log("Coloque los numeros entre 1 al 7");
        break;
};