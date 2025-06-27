//Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados 
// ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que 
// representen al número identificador del empleado y la cantidad de días que trabajó 
// en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero 
// que el dueño le debe pagar al empleado que ingresó.

const numIdent=parseInt(prompt("Ingrese del 1 al 4 el numero de identificador del empleado"));
const dias= parseInt(prompt("ingrese del 1 al 6 la cantidad de dias laborados"));

let empleados ="";
let pago="";

//for (i=1; i=4; i++){
   // numIdent=i
    if (numIdent===1){
        empleados="cajero";
        pago = 56;
    }else if (numIdent===2){
        empleados="servidor"
        pago = 64;
    }else if (numIdent===3){
        empleados="prepador de mezclas"
        pago = 80;
    }else{
        empleados="mantenimiento"
        pago = 48;
    }
//}  
let pagoTotal = dias*pago;
alert("El colaborado "+empleados+", recibira la suma de "+pagoTotal);
