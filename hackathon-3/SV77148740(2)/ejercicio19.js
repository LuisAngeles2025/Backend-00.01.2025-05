// 19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de 
// la siguiente forma con su número identificador y salario diario correspondiente:

//    Cajero (56$/día).

//    Servidor (64$/día).

//    Preparador de mezclas (80$/día).

//    Mantenimiento (48$/día).

//    El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen
//    al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos).
//    Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que 
//    ingresó

console.log("Tipos de empleados: ");
console.log("1. Cajero");
console.log("2. Servidor");
console.log("3. Preparador de mezclas");
console.log("4. Mantenimiento");

let dias = parseInt(prompt("Coloque los días trabajados en la semana (1-6):"));
let opc = parseInt(prompt("Seleccione empleado (1-4):"));

let total = 0;

if (dias > 6 || dias < 1) {
    console.log("Los dias ingresados no son validos (deben ser entre 1 y 6)");
} else {
    switch (opc) {
        case 1:
            total = dias * 56;
            console.log("El salario del cajero es: " + total);
            break;
        case 2:
            total = dias * 64;
            console.log("El salario del servidor es: " + total);
            break;
        case 3:
            total = dias * 80;
            console.log("El salario del preparador de mezclas es: " + total);
            break;
        case 4:
            total = dias * 48;
            console.log("El salario de mantenimiento es: " + total);
            break;
        default:
            console.log("No coloco un codigo de empleado vzlido.");
    }
}