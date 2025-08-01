// 17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.

let hora=prompt("Coloque la hora: ");
let minuto=prompt("Coloque el minuto: ");
let segundo=prompt("Coloque el segundo: ");

segundo++;

if (segundo == 60) {
    segundo = 0;
    minuto++;
}

if (minuto == 60) {
    minuto = 0;
    hora++;
}

if (hora == 24) {
    hora = 0;
}

console.log ("La hora es: ",hora,": ",minuto,": ",segundo);